import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	listPosts,
	listFollowsByFollowId
} from '../../../graphql/queries'
import {
	createFollow,
	deleteFollow
} from '../../../graphql/mutations'

import { Page } from '../../base/jsx/Page'
import { Base, Hero, Avatar } from '../styles/userStyles'
import { Post } from '../../base/jsx/Post'

export const UserPage = ({ userData, id, darkMode, setDarkMode }) => {
	const { username } = useParams()

	const [ posts, setPosts ] = useState([])
	const [ { name, avatar }, setUserData ] = useState({})
	
	const [ followId, setFollowId ] = useState(false)
	const [ followers, setFollowers ] = useState([])

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await API.graphql({
					query: getUserByUsername,
					variables: { username }
				})
				setUserData(data.getUserByUsername.items[0])
			} catch (err) {
				console.log('error fetching user data', err)
			}
		}
		fetchUser()

		const fetchPosts = async () => {
			try {
				const { data } = await API.graphql({
					query: listPosts
				})
				setPosts(
					data.listPosts.items
						.filter(post => post.owner === username)
				)
			} catch (err) {
				console.log('error fetching posts for user', err)
			}
		}
		fetchPosts()

		const fetchFollowers = async () => {
			try {
				const { data } = await API.graphql({
					query: listFollowsByFollowId,
					variables: { followId: username }
				})
				const valFollowers = validateFollowers(data.listFollowsByFollowId.items)
				
				for (let i in valFollowers)
					if (valFollowers[i].owner === userData.username) {
						setFollowId(valFollowers[i].id)
						return
					}
			} catch (err) {
				console.log('error fetching follower data', err)
			}
		}

		const validateFollowers = followers => {
			// Make sure each follow is valid by having one user for each one
			const userFollowers = {}
			followers.map(({ owner, id }) => userFollowers[owner] = id)
			let valFollowers = []
			for (let owner in userFollowers)
				valFollowers.push({ id: userFollowers[owner], owner })
			setFollowers(valFollowers)
			return valFollowers
		}
		
		fetchFollowers()
	}, [ username, userData.username ])

	const handleFollow = async () => {
		try {
			const { data } = await API.graphql({
				query: createFollow,
				variables: { input: {
					userId: userData.owner,
					followId: username
				}},
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setFollowers([ ...followers, data.createFollow ])
			setFollowId(data.createFollow.id)
		} catch (err) {
			console.log('error following user', err)
		}
	}

	const handleUnfollow = async () => {
		try {
			await API.graphql({
				query: deleteFollow,
				variables: { input: { id: followId } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setFollowers(followers.filter(id => id === followId))
			setFollowId(false)
		} catch (err) {
			console.log('error unfollowing user', err)
		}
	}	

	return (
		<Page title={name} darkMode={darkMode} setDarkMode={setDarkMode}>
			<Base>
				<Hero/>
				<Avatar
					alt={username}
					src={avatar}
				/>
				<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i> {username === userData.username && ' - You'}</h3>
				
				<p>{followers !== [] ? `${followers.length} followers` : ''}</p>
				{(userData.username !== username) && (followId ? (
					<button
						className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
						onClick={handleUnfollow}
					>Unfollow</button>
				) : (
					<button
						className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
						onClick={handleFollow}
					>Follow</button>
				))}
			</Base>

			{posts.map(props => (
				<Post userData={userData} {...props} />
			))}
		</Page>
	)
};
