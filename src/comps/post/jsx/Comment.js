import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	listCommentLikesByCommentId
} from '../../../graphql/queries'
import {
	createCommentLike,
	deleteCommentLike
} from '../../../graphql/mutations'

import { Avatar, Username } from '../../base/styles/userStyles'
import { PostBase } from '../../base/styles/postStyles'

export const Comment = ({ userData, postId, id, body, postTime, owner }) => {
	const [ { username, name, avatar }, setUserData ] = useState({})

	const [ likeId, setLikeId ] = useState(false)
	const [ likes, setLikes ] = useState([])

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await API.graphql({
					query: getUserByUsername,
					variables: { username: owner }
				})
				setUserData(data.getUserByUsername.items[0])
			} catch (err) {
				console.log('error fetching user data', err)
			}
		}
		fetchUser()

		const fetchCommentLikes = async () => {
			try {
				const { data } = await API.graphql({
					query: listCommentLikesByCommentId,
					variables: { commentId: id }
				})
				const valLikes = validateLikes(data.listCommentLikesByCommentId.items)
				
				for (let i in valLikes)
					if (valLikes[i].owner === userData.username) {
						setLikeId(valLikes[i].id)
						return
					}
			} catch (err) {
				console.log('error fetching comment like data', err)
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
		
		fetchCommentLikes()
	}, [ owner ])

	const handleLike = async () => {
		try {
			const { data } = await API.graphql({
				query: createCommentLike,
				variables: { input: { commentId: id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})
			
			setLikes([ ...likes, data.createPostLike ])
			setLikeId(data.createCommentLike.id)
		} catch (err) {
			console.log('error liking comment', err)
		}
	}

	const handleUnlike = async () => {
		try {
			await API.graphql({
				query: deleteCommentLike,
				variables: { input: { id: likeId } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setLikes(likes.filter(id => id === likeId))
			setLikeId(false)
		} catch (err) {
			console.log('error unliking comment', err)
		}
	}	

	const time = postTime
	//console.log(postTime)

	return (
		<PostBase>
			<Link to={`/${username}`}>
				<Avatar
					alt={username}
					src={avatar}
					className='w-10 h-10 rounded-3xl'
				/>
				<Username><b>{name}</b> <i>@{username}</i></Username>
			</Link>
			<h4> - {time}</h4>
			
			<Link to={`/${username}/${postId}/${id}`}>
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
