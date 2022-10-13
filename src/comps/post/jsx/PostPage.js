import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	listPostLikesByPostId,
	getPost 
} from '../../../graphql/queries'
import {
	createPostLike,
	deletePostLike,
	deletePost 
} from '../../../graphql/mutations'

import { convertTime } from '../../../convertTime'

import { Page } from '../../base/jsx/Page'
import { CreateComment } from './CreateComment'
import { Timeline } from './Timeline'

export const PostPage = ({ userData, darkMode, setDarkMode }) => {
	const { username, postId: id } = useParams()
	
	const [ likeId, setLikeId ] = useState(false)
	const [ likes, setLikes ] = useState([])

	const [ { body, postTime }, setPostData ] = useState({})
	const [ { name, avatar }, setUserData ] = useState({})

	const [ comments, setComments ] = useState([])

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

		const fetchPost = async () => {
			try {
				const { data } = await API.graphql({
					query: getPost,
					variables: { id }
				})
				setPostData(data.getPost)
			} catch (err) {
				console.log('error fetching post data', err)
			}
		}
		fetchPost()
		
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

		const validateLikes = /*async*/ likes => {
			// make sure each like is valid by having one user for each one
			setLikes(likes)
			return likes
		}
		
		fetchPostLikes()
	}, [ username, id, userData.username ])
	
	const handleLike = async () => {
		try {
			const { data } = await API.graphql({
				query: createPostLike,
				variables: { input: { postId: id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})
			
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

			setLikeId(false)
		} catch (err) {
			console.log('error unliking post', err)
		}
	}	


	const handleDelete = async () => {
		try {
			API.graphql({
				query: deletePost,
				variables: { input: { id } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})
		} catch (err) {
			console.log('error deleting post', err)
		}
	}

	return (
		<Page title='Post'>
			<div>
				<Link to={`/${username}`}>
					<img
						alt={username}
						src={avatar}
						className='w-10 h-10 rounded-3xl'
					/>
					<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i></h3>
				</Link>
				<h4> - {convertTime(postTime)}</h4>
				
				<p>{body}</p>
				{/* likes, comments... */}
					
				{(userData.username === username) && (
					<Link to='/'>
						<button
							className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
							onClick={handleDelete}
						>Delete</button>
					</Link>
				)}
				
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
			</div>

			<CreateComment userData={userData} postId={id} comments={comments} setComments={setComments} />

			<Timeline userData={userData} postId={id} comments={comments} setComments={setComments} />
		</Page>
	)
};
