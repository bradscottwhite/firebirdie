import { HomePage } from './comps/home/jsx/HomePage'
import { SettingsPage } from './comps/settings/jsx/SettingsPage'
import { UserPage } from './comps/user/jsx/UserPage'
import { PostPage } from './comps/post/jsx/PostPage'
import { CommentPage } from './comps/comment/jsx/CommentPage'
import { ExplorePage } from './comps/explore/jsx/ExplorePage'
import { CreatePostPage } from './comps/createPost/jsx/CreatePostPage'

export const routes = [
	{
		path: '/',
		El: HomePage,
	}, {
		path: '/settings',
		El: SettingsPage,
	}, {
		path: '/:username',
		El: UserPage
	}, {
		path: '/:username/:postId',
		El: PostPage
	}, {
		path: '/:username/:postId/:commentId',
		El: CommentPage
	}, {
		path: '/explore',
		El: ExplorePage
	}, {
		path: '/post',
		El: CreatePostPage
	}
];
