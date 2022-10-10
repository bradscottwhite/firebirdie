import { useState } from 'react'

import { CreatePost } from './CreatePost'
import { Timeline } from './Timeline'

export const Home = ({ userData }) => {
	const [ posts, setPosts ] = useState([])
	
	return (
		<div>
			<CreatePost posts={posts} setPosts={setPosts} userData={userData} />
			<Timeline posts={posts} setPosts={setPosts} />
		</div>
	)
};
