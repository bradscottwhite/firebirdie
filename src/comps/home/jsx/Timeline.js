import { useState, useEffect } from 'react'

import { API } from 'aws-amplify'
// Fetch posts from users who they are following:
// First get users followed then get posts from them 
import {
	listPostsByAuthorId,
	listFollows,
	listFollowsByUserId
} from '../../../graphql/queries'

import { Post } from '../../base/jsx/Post'

export const Timeline = ({ userData, posts, setPosts }) => {
	const { username } = userData

	//const [ follows, setFollows ] = useState([])
	
	useEffect(() => {
		const fetchFollowers = async () => {
			try {
				const { data } = await API.graphql({
					query: listFollowsByUserId,
					variables: { userId: username }
				})
				const followData = data.listFollowsByUserId.items.filter(({ userId, owner }) => owner === userId)
				// Add yourself to the timeline:
				followData.push({
					followId: username,
					owner: username,
					userId: username
				})
				fetchPosts(followData)
				//setFollows(followData)
			} catch (err) {
				console.log('error fetching follower data', err)
			}
		}
		fetchFollowers()

		const fetchPosts = async followData => {
			try {
				let posts = []
				for (let i in followData) {
					const { data } = await API.graphql({
						query: listPostsByAuthorId,
						variables: { authorId: followData[i].followId }
					})
					const postData = data.listPostsByAuthorId.items.filter(({ authorId, owner }) => owner === authorId)
					posts = [ ...posts, ...postData ]
				}
				setPosts(posts)
			} catch (err) {
				console.log('error fetching posts', err)
			}
		}
		//fetchPosts()
		// Subscribe....!!!
	}, [ username ])

	return (
		<div>
			{posts.map(props => (
				<Post userData={userData} {...props} />
			))}
		</div>
	)
};
