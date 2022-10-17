import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	getUserByUsername,
	getPost 
} from '../../../graphql/queries'

import { convertTimeToDate } from '../../../convertTimeToDate'

import { Page } from '../../base/jsx/Page'
import { PostBase } from './PostBase'
import { CreateComment } from './CreateComment'
import { Timeline } from './Timeline'

export const PostPage = ({ userData, darkMode, setDarkMode }) => {
	const { username, postId: id } = useParams()
	
	const [ { body, postTime }, setPostData ] = useState({})
	const [ { name, avatar, bio }, setUserData ] = useState({})

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
		
	}, [ username, id, userData.username ])
	
	return (
		<Page title='Post' darkMode={darkMode} setDarkMode={setDarkMode}>
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

			<CreateComment userData={userData} postId={id} comments={comments} setComments={setComments} />

			<Timeline userData={userData} postId={id} comments={comments} setComments={setComments} />
		</Page>
	)
};
