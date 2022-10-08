import { Home } from './Home'
import { Settings } from './Settings'

export const routes = [
	{
		path: '/',
		El: Home,
		name: 'Home'
	}, {
		path: '/settings',
		El: Settings,
		name: 'Settings'
	}
];
