import { useState } from 'react'

import { API } from 'aws-amplify'
import { createComment } from './graphql/mutations'

export const CreateComment = ({ userData, postId, comments, setComments }) => {
	const { username, avatar, name } = userData

	const [ body, setBody ] = useState('')

	const handleComment = async () => {
		if (body !== '')
			try {
				const input = {
					body,
					postTime: new Date().toISOString(),
					postId
				}
				const { data } = await API.graphql({
					query: createComment,
					variables: { input },
					authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
				setComments([ data.createComment, ...comments ])
				setBody('')
			} catch (err) {
				console.log('error creating comment', err)
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
				placeholder='Enter comment...'
				onChange={e => setBody(e.target.value)}
			></textarea>
			
			<button
				className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
				onClick={handleComment}
			>Post</button>
		</div>
	)
};
