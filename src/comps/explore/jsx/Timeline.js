import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { convertTime } from '../../../convertTime'

import { API } from 'aws-amplify'
import {
	listPosts
} from '../../../graphql/queries'

import { Post } from '../../base/jsx/Post'

export const Timeline = ({ userData, posts, setPosts }) => {
	useEffect(() => {
		const fetchPosts = async followData => {
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
	}, [ setPosts ])

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
					<Post userData={userData} {...props} postTime={convertTime(props.postTime)} />
				))}
			</motion.div>
		</AnimatePresence>
	)
};
