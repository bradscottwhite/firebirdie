import { useState } from 'react'

import { API } from 'aws-amplify'
import { createComment } from '../../../graphql/mutations'

import { Base, Avatar, Text, PostBtn, PostIcon } from '../../home/styles/createPostStyles'

export const CreateComment = ({ userData, postId, comments, setComments }) => {
	const { username, avatar } = userData

	const [ body, setBody ] = useState('')

	const handleComment = async () => {
		if (body !== '')
			try {
				const input = {
					body,
					postTime: new Date().toISOString(),
					postId,
					authorId: username
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
		<Base>
			<Avatar
				alt={username}
				src={avatar}
			/>

			<Text
				value={body}
				placeholder='Enter comment...'
				onChange={e => setBody(e.target.value)}
			/>

			<div className='flex justify-end'>
				<PostBtn onClick={handleComment}>
					<PostIcon/>
					Comment
				</PostBtn>
			</div>
		</Base>
	)
};
