import { Link } from 'react-router-dom'

export const Main = ({ children, signOut, username }) => {
	const routes = [
		{
			path: '/',
			name: 'Home',
		}, {
			path: '/settings',
			name: 'Settings',
		}, {
			path: `/${username}`,
			name: 'Profile'
		}
	]

	return (
		<div>
			{children}
			
			<div className='bg-purple-600 p-10'>
				<h2>Firebirdie 🔥🐦 - Nav</h2>
				
				{routes.map(({ path, name }) => (
					<Link to={path}>{name}</Link>
				))}

				<button
					className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
					onClick={signOut}
				>Sign Out</button>
			</div>
		</div>
	)
};
