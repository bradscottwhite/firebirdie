import { Home } from './Home'
import { Settings } from './Settings'
import { User } from './User'
import { PostPage } from './PostPage'

export const routes = [
	{
		path: '/',
		El: Home,
	}, {
		path: '/settings',
		El: Settings,
	}, {
		path: '/:username',
		El: User
	}, {
		path: '/:username/:id',
		El: PostPage,
	}
];
