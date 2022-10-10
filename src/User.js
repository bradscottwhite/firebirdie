import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from 'aws-amplify'
import { getUserByUsername, listPosts } from './graphql/queries'

import { Post } from './Post'

export const User = ({ userData }) => {
	const { username } = useParams()

	const [ posts, setPosts ] = useState([])
	const [ { name, avatar, owner }, setUserData ] = useState({})

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
	}, [ username ])

	return (
		<div>
			<img
				alt={username}
				src={avatar}
				className='w-10 h-10 rounded-3xl'
			/>
			<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i> {username === userData.username && ' - You'}</h3>
			
			{posts.map(props => (
				<Post {...props} />
			))}
		</div>
	)
};
