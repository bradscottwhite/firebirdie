import { useState } from 'react'

import { API } from 'aws-amplify'
import { createPost } from '../../../graphql/mutations'

import { Base, Avatar, Text, PostBtn, PostIcon } from '../styles/createPostStyles'

export const CreatePost = ({ posts, setPosts, userData }) => {
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
				setPosts([ data.createPost, ...posts ])
				setBody('')
			} catch (err) {
				console.log('error creating post', err)
			}
	}

	return (
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

			<div className='flex justify-end'>
				<PostBtn onClick={handlePost}>
					<PostIcon/>
					Post
				</PostBtn>
			</div>
		</Base>
	)
};
