import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { API } from 'aws-amplify'
// Fetch posts from users who they are following:
// First get users followed then get posts from them 
import {
	listPostsByAuthorId,
	listFollowsByUserId
} from '../../../graphql/queries'

import { Post } from '../../base/jsx/Post'

export const Timeline = ({ userData, posts, setPosts }) => {
	const { username } = userData
	
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
	}, [ username, setPosts ])

	const variants = {
		closed: {
			opacity: 0,
			y: '-100vh',
			transition: {
				duration: 2,
				staggerChildren: 0.2,
				staggerDirection: -1
			}
		}, open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 2,
				delayChildren: 0.2,
				staggerChildren: 0.2,
				staggerDirection: 1
			}
		}
	}

	return (
		<AnimatePresence>
			<motion.div
				variants={variants}
				animate='open'
				exit='closed'
			>
				{posts.map(props => (
					<Post userData={userData} {...props} />
				))}
			</motion.div>
		</AnimatePresence>
	)
};
