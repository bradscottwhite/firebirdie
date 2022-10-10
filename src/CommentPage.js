import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { getUserByUsername, getComment } from './graphql/queries'

//import { CreateComment } from './CreateComment'
//import { CommentTimeline } from './CommentTimeline'

export const CommentPage = () => {
	const { username, postId, commentId: id } = useParams()

	const [ { body, postTime }, setCommentData ] = useState({})
	const [ { name, avatar }, setUserData ] = useState({})

	//const [ comments, setComments ] = useState([])

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

		const fetchComment = async () => {
			try {
				const { data } = await API.graphql({
					query: getComment,
					variables: { id }
				})
				setCommentData(data.getComment)
			} catch (err) {
				console.log('error fetching comment data', err)
			}
		}
		fetchComment()
	}, [ username, id ])

	const time = postTime
	//console.log(postTime)

	return (
		<div>
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
				
				<p>{body}</p>
				{/* likes, comments... */}
			</div>

			{/*<CreateComment comments={comments} setComments={setComments} userData={{ username, avatar, name }} />*/}

			{/*<CommentTimeline postId={id} comments={comments} setComments={setComments} />*/}
		</div>
	)
};
