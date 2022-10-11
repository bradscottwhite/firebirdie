import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	listPostLikesByPostId
} from '../../../graphql/queries'
import {
	createPostLike,
	deletePostLike
} from '../../../graphql/mutations'

import { convertTime } from '../../../convertTime'

import { Avatar, Username } from '../styles/userStyles'
import { PostBase } from '../styles/postStyles'

export const Post = ({ userData, id, body, postTime, owner, authorId }) => {
	const [ { username, name, avatar }, setUserData ] = useState({})
	
	const [ likeId, setLikeId ] = useState(false)
	const [ likes, setLikes ] = useState([])

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await API.graphql({
					query: getUserByUsername,
					variables: { username: authorId }
				})
				setUserData(data.getUserByUsername.items[0])
			} catch (err) {
				console.log('error fetching user data', err)
			}
		}
		fetchUser()

		const fetchPostLikes = async () => {
			try {
				const { data } = await API.graphql({
					query: listPostLikesByPostId,
					variables: { postId: id }
				})
				const valLikes = validateLikes(data.listPostLikesByPostId.items)
				
				for (let i in valLikes)
					if (valLikes[i].owner === userData.username) {
						setLikeId(valLikes[i].id)
						return
					}
			} catch (err) {
				console.log('error fetching post like data', err)
			}
		}

		const validateLikes = likes => {
			// Make sure each like is valid by having one user for each one
			const userLikes = {}
			likes.map(({ owner, id }) => {
				userLikes[owner] = id
			})
			let valLikes = []
			for (let owner in userLikes)
				valLikes.push({ id: userLikes[owner], owner })
			setLikes(valLikes)
			return valLikes
		}
		
		fetchPostLikes()
	}, [ owner, userData.username ])

	const handleLike = async () => {
		try {
			const { data } = await API.graphql({
				query: createPostLike,
				variables: { input: { postId: id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setLikes([ ...likes, data.createPostLike ])
			setLikeId(data.createPostLike.id)
		} catch (err) {
			console.log('error liking post', err)
		}
	}

	const handleUnlike = async () => {
		try {
			await API.graphql({
				query: deletePostLike,
				variables: { input: { id: likeId } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setLikes(likes.filter(id => id === likeId))
			setLikeId(false)
		} catch (err) {
			console.log('error unliking post', err)
		}
	}	

	return (
		<PostBase>
			<Link to={`/${username}`}>
				<Avatar
					alt={username}
					src={avatar}
				/>
				<Username><b>{name}</b> <i>@{username}</i></Username>
			</Link>
			<h4> - {convertTime(postTime)}</h4>
			
			<Link to={`/${username}/${id}`}>
				<p>{body}</p>
				{/* likes, comments... */}
			</Link>

			<p>{likes !== [] ? `${likes.length} likes` : ''}</p>
			{likeId ? (
				<button
					className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
					onClick={handleUnlike}
				>Unlike</button>
			) : (
				<button
					className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
					onClick={handleLike}
				>Like</button>
			)}
		</PostBase>
	)
};
