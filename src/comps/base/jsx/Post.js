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

import { Base, User, Avatar, Dropdown, Name, Stats, Username, Time, TimeDot, Text, Likes, LikeCount, LikeBtn, LikeIcon, UnlikeIcon } from '../styles/postStyles'

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

	const variants = {
		closed: { opacity: 0 },
		open: { opacity: 1 }
	}

	return (
		<Base
			variants={variants}
			exit='closed'
			key={id}
		>
			<User to={`/${username}`}>
				<Avatar
					style={{
						transformStyle: 'preserve-3d'
					}}
					alt={username}
					src={avatar}
				/>

				<Dropdown
					style={{
						transformStyle: 'preserve-3d'
					}}
				>
					<Avatar
						alt={username}
						src={avatar}
					/>
					<div className='flex'>
						<Name>{name}</Name>
						<Username>{username}</Username>
					</div>
				</Dropdown>
			</User>

			<div>
				<Stats>
					<Link className='profile-link' to={`/${username}`}>
						<Name>{name}</Name>
						<Dropdown>{username}</Dropdown>
					</Link>
					<Username>@{username}</Username>
					<TimeDot>·</TimeDot>
					<Time>{convertTime(postTime)}</Time>
				</Stats>

				<Text to={`/${username}/${id}`}>
					{body}
				</Text>

				<Likes>
					<LikeCount>
						{likes !== [] ? `${likes.length} likes` : ''}
					</LikeCount>
					{likeId ? (
						<LikeBtn onClick={handleUnlike}>
							<UnlikeIcon/>
						</LikeBtn>
					) : (
						<LikeBtn onClick={handleLike}>
							<LikeIcon/>
						</LikeBtn>
					)}
				</Likes>
			</div>
		</Base>
	)
};
