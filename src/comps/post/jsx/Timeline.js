import { useEffect } from 'react'

import { API } from 'aws-amplify'
import { listCommentsByPostId } from '../../../graphql/queries'

import { convertTime } from '../../../convertTime'

import { Comment } from './Comment'

export const Timeline = ({ userData, postId, comments, setComments }) => {
	useEffect(() => {
		const fetchComments = async () => {
			try {
				const { data } = await API.graphql({
					query: listCommentsByPostId,
					variables: { postId }
				})
				setComments(data.listCommentsByPostId.items)
			} catch (err) {
				console.log('error fetching posts', err)
			}
		}
		fetchComments()
		// Subscribe....!!!
	}, [ postId, setComments ])
	
	return (
		<div>
			{comments.map(props => (
				<Comment userData={userData} {...props} postTime={convertTime(props.postTime)} />
			))}
		</div>
	)
};
