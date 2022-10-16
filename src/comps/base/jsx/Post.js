import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	listPostLikesByPostId,
	listFollowsByFollowId
} from '../../../graphql/queries'
import {
	createPostLike,
	deletePostLike
} from '../../../graphql/mutations'

import { Base, User, Avatar, Name, Stats, Username, Time, TimeDot, Text, Analytics, Likes, LikeCount, LikeBtn, LikeIcon, UnlikeIcon, CommentBtn } from '../styles/postStyles'

import { UserDropdown } from './UserDropdown'

export const Post = ({ userData, id, body, postTime, owner, authorId }) => {
	const [ { username, name, avatar }, setUserData ] = useState({})
	
	const [ likeId, setLikeId ] = useState(false)
	const [ likes, setLikes ] = useState([])

	const [ followId, setFollowId ] = useState(false)
	const [ followers, setFollowers ] = useState([])

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
				return id
			})
			let valLikes = []
			for (let owner in userLikes)
				valLikes.push({ id: userLikes[owner], owner })
			setLikes(valLikes)
			return valLikes
		}
		
		fetchPostLikes()
		
		const fetchFollowers = async () => {
			try {
				const { data } = await API.graphql({
					query: listFollowsByFollowId,
					variables: { followId: authorId }
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
	}, [ owner, userData.username, authorId, id ])

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
			<User>
				<Link to={`/${username}`}>
					<Avatar
						alt={username}
						src={avatar}
					/>
				</Link>

				<UserDropdown
					name={name}
					username={username}
					avatar={avatar}
					userData={userData}
					followers={followers} setFollowers={setFollowers}
					followId={followId} setFollowId={setFollowId}
				/>
			</User>

			<div>
				<Stats>
					<User>
						<Name to={`/${username}`}>{name}</Name>

						<UserDropdown
							isName={true}
							name={name}
							username={username}
							avatar={avatar}
							userData={userData}
							followers={followers} setFollowers={setFollowers}
							followId={followId} setFollowId={setFollowId}
						/>
					</User>

					<Username>@{username}</Username>
					<TimeDot>·</TimeDot>
					<Time>{postTime}</Time>
				</Stats>

				<Text to={`/${username}/${id}`}>
					{body}
				</Text>

				<Analytics>
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

					<CommentBtn to={`/${username}/${id}`} />
				</Analytics>
			</div>
		</Base>
	)
};
