import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	listCommentLikesByCommentId,
	listFollowsByFollowId
} from '../../../graphql/queries'
import {
	deleteComment,
	createCommentLike,
	deleteCommentLike
} from '../../../graphql/mutations'

import { Base, User, Avatar, Name, UserInfo, Username, Time, TimeDot, Text, Analytics, Likes, LikeCount, LikeBtn, LikeIcon, UnlikeIcon, DeleteBtn } from '../../post/styles/postStyles'

import { UserDropdown } from '../../base/jsx/UserDropdown'

export const CommentBase = ({ userData, id, body, postTime, username, name, avatar, bio }) => {
	const [ likeId, setLikeId ] = useState(false)
	const [ likes, setLikes ] = useState([])

	const [ followId, setFollowId ] = useState(false)
	const [ followers, setFollowers ] = useState([])

	useEffect(() => {
		const fetchPostLikes = async () => {
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
	}, [ userData.username, username, id ])

	const handleLike = async () => {
		try {
			const { data } = await API.graphql({
				query: createCommentLike,
				variables: { input: { commentId: id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setLikes([ ...likes, data.createCommentLike ])
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

	const handleDelete = async () => {
		try {
			API.graphql({
				query: deleteComment,
				variables: { input: { id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})
		} catch (err) {
			console.log('error deleting comment', err)
		}
	}

	const variants = {
		closed: { opacity: 0 },
		open: { opacity: 1 }
	}

	return (
		<div className='grid place-items-center'>
			<Base
				variants={variants}
				exit='closed'
				key={id}
			>
				<div className='flex'>
					<User>
						<Link to={`/${username}`}>
							<Avatar
								alt={username}
								src={avatar}
							/>
						</Link>

						<UserDropdown
							name={name}
							bio={bio}
							username={username}
							avatar={avatar}
							userData={userData}
							followers={followers} setFollowers={setFollowers}
							followId={followId} setFollowId={setFollowId}
						/>
					</User>

					<UserInfo>
						<User>
							<Name to={`/${username}`}>{name}</Name>

							<UserDropdown
								isName={true}
								name={name}
								bio={bio}
								username={username}
								avatar={avatar}
								userData={userData}
								followers={followers} setFollowers={setFollowers}
								followId={followId} setFollowId={setFollowId}
							/>
						</User>

						<Username>@{username}</Username>
					</UserInfo>
				</div>

				<Text>{body}</Text>

				<Time>
					{postTime.time}
					<TimeDot>·</TimeDot>
					{postTime.date}
				</Time>
				
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

					{(userData.username === username) && (
						<DeleteBtn
							onClick={handleDelete}
							to='/'
						/>
					)}
				
				</Analytics>
			</Base>
		</div>
	)
};
