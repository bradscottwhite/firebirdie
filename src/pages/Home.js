import { useState } from 'react'

import { CreatePost } from '../comps/home/jsx/CreatePost'
import { Timeline } from '../comps/home/jsx/Timeline'

export const Home = ({ userData }) => {
	const [ posts, setPosts ] = useState([])
	
	return (
		<div>
			<CreatePost posts={posts} setPosts={setPosts} userData={userData} />
			<Timeline posts={posts} setPosts={setPosts} userData={userData} />
		</div>
	)
};
