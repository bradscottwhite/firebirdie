import { useState } from  'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { createPost } from '../../../graphql/mutations'

import { Page } from '../../base/jsx/Page'

import { Base, Avatar, Text, PostBtn, PostIcon } from '../styles/createPostStyles'

export const CreatePostPage = ({ userData, darkMode, setDarkMode }) => {
	const { username, avatar, name } = userData

	const [ body, setBody ] = useState('')
	
	const handlePost = async () => {
		if (body !== '')
			try {
				const input = {
					body,
					postTime: new Date().toISOString(),
					//likes: [],
					authorId: username
				}
				const { data } = await API.graphql({
					query: createPost,
					variables: { input },
					authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
			} catch (err) {
				console.log('error creating post', err)
			}
	}

	return (
		<Page title='Post' darkMode={darkMode} setDarkMode={setDarkMode}>
			<Base>
				<Avatar
					alt={username}
					src={avatar}
				/>

				<Text
					value={body}
					placeholder='Enter post...'
					onChange={e => setBody(e.target.value)}
				/>

				<Link to='/'>
					<PostBtn onClick={handlePost}>
						<PostIcon/>
						Post
					</PostBtn>
				</Link>
			</Base>
		</Page>
	)
};
