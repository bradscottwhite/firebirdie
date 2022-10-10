import { Home } from './Home'
import { Settings } from './Settings'
import { User } from './User'
import { PostPage } from './PostPage'
import { CommentPage } from './CommentPage'

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
		El: PostPage,
	}, {
		path: '/:username/:postId/:commentId',
		El: CommentPage,
	}
];
