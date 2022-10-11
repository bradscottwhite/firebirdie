import { useState } from 'react'

import { API } from 'aws-amplify'
import { createPost } from '../../../graphql/mutations'

export const CreatePost = ({ posts, setPosts, userData }) => {
	const { username, avatar, name } = userData

	const [ body, setBody ] = useState('')
	
	const handlePost = async () => {
		if (body !== '')
			try {
				const input = {
					body,
					postTime: new Date().toISOString(),
					likes: [],
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
		<div>
			<img
				alt={username}
				src={avatar}
				className='w-10 h-10 rounded-3xl'
			/>
			<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i></h3>
			
			<textarea
				value={body}
				placeholder='Enter post...'
				onChange={e => setBody(e.target.value)}
			></textarea>
			
			<button
				className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
				onClick={handlePost}
			>Post</button>
		</div>
	)
};
