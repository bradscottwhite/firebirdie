import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { getUserByUsername, getComment } from '../../../graphql/queries'
import { deleteComment } from '../../../graphql/mutations'

import { convertTimeToDate } from '../../../convertTimeToDate'

import { Page } from '../../base/jsx/Page'
import { PostBase } from '../../post/jsx/PostBase'

export const CommentPage = ({ userData, darkMode, setDarkMode }) => {
	const { username, /*postId,*/ commentId: id } = useParams()

	const [ { body, postTime }, setCommentData ] = useState({})
	const [ { name, avatar, bio }, setUserData ] = useState({})

	/*const { username, postId: id } = useParams()
	
	const [ { body, postTime }, setPostData ] = useState({})
	const [ { name, avatar, bio }, setUserData ] = useState({})*/

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

	return (
		<Page title='Comment' darkMode={darkMode} setDarkMode={setDarkMode}>
			<PostBase
				userData={userData}
				id={id}
				bio={bio}
				body={body}
				postTime={convertTimeToDate(postTime)}
				username={username}
				name={name}
				avatar={avatar}
			/>

			{/*<CreateComment comments={comments} setComments={setComments} userData={{ username, avatar, name }} />*/}

			{/*<CommentTimeline postId={id} comments={comments} setComments={setComments} />*/}
		</Page>
	)
};
