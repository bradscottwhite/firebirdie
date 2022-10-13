import { useState } from 'react'

import { Page } from '../../base/jsx/Page'
import { CreatePost } from './CreatePost'
import { Timeline } from './Timeline'

export const HomePage = ({ userData, darkMode, setDarkMode }) => {
	const [ posts, setPosts ] = useState([])
	
	return (
		<Page title='Home' darkMode={darkMode} setDarkMode={setDarkMode}>
			<CreatePost posts={posts} setPosts={setPosts} userData={userData} />
			<Timeline posts={posts} setPosts={setPosts} userData={userData} />
		</Page>
	)
};
