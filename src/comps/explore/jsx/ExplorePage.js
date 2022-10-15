import { useState } from 'react'

import { Page } from '../../base/jsx/Page'
import { CreatePost } from '../../home/jsx/CreatePost'
import { Timeline } from './Timeline'

export const ExplorePage = ({ userData, darkMode, setDarkMode }) => {
	const [ posts, setPosts ] = useState([])
	
	return (
		<Page title='Explore' darkMode={darkMode} setDarkMode={setDarkMode}>
			<CreatePost posts={posts} setPosts={setPosts} userData={userData} />
			<Timeline posts={posts} setPosts={setPosts} userData={userData} />
		</Page>
	)
};
