import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { getUserByUsername, getPost } from './graphql/queries'

export const PostPage = () => {
	const { username, id } = useParams()

	const [ { body, postTime }, setPostData ] = useState({})
	const [ { name, avatar }, setUserData ] = useState({})

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
	}, [ username, id ])

	const time = postTime
	//console.log(postTime)

	return (
		<div>
			<Link to={`/${username}`}>
				<img
					alt={username}
					src={avatar}
					className='w-10 h-10 rounded-3xl'
				/>
				<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i></h3>
			</Link>
			<h4> - {time}</h4>
			
			<Link to={`/${username}/${id}`}>
				<p>{body}</p>
				{/* likes, comments... */}
			</Link>	
		</div>
	)
};
