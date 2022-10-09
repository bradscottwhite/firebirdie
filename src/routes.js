import { Home } from './Home'
import { Settings } from './Settings'
import { PostPage } from './PostPage'

export const routes = [
	{
		path: '/',
		El: Home,
		name: 'Home'
	}, {
		path: '/settings',
		El: Settings,
		name: 'Settings'
	}, {
		path: '/:username/:id',
		El: PostPage,
		name: 'Post'
	}
];
