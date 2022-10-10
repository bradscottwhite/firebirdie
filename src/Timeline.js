import { useState, useEffect } from 'react'

import { API } from 'aws-amplify'
// Later only fetch posts from users who they are following
import { listPosts } from './graphql/queries'

import { Post } from './Post'

export const Timeline = ({ posts, setPosts }) => {
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await API.graphql({
					query: listPosts
				})
				setPosts(data.listPosts.items)
			} catch (err) {
				console.log('error fetching posts', err)
			}
		}
		fetchPosts()
		// Subscribe....!!!
	}, [])
	
	return (
		<div>
			{posts.map(props => (
				<Post {...props} />
			))}
		</div>
	)
};
