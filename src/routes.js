import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { User } from './pages/User'
import { Post } from './pages/Post'
import { Comment } from './pages/Comment'

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
		path: '/:username/:postId',
		El: Post
	}, {
		path: '/:username/:postId/:commentId',
		El: Comment
	}
];
