import { Base, Logo, LogoSvg, NavLinks, NavLink, Icon, SignOut } from '../styles/navStyles'

export const Nav = ({ signOut, username }) => {
	const links = [
		{
			path: '/',
			name: 'Home',
			icon: 'fa-home'
		}, {
			path: '/post',//make route later
			name: 'Post',
			icon: 'fa-pencil'
		}, {
			path: '/notifications', //make route later
			name: 'Notifications',
			icon: 'fa-bell'
		}, {
			path: '/settings',
			name: 'Settings',
			icon: 'fa-sliders'
		}, {
			path: `/${username}`,
			name: 'Profile',
			icon: 'fa-user'
		}
	]

	return (
		<Base>
			<Logo>
				<LogoSvg left fill='#FFF' viewBox="0 0 448 512">
					<path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-2.8-5.6-5.6-11.2-9.8-16.8l-50.6 58.8s-81.4-103.6-87.1-110.6C133.1 243.8 112 273.2 112 306.8C112 375.4 162.6 416 225.7 416z"/>
				</LogoSvg>

				<LogoSvg right fill='#FFF' viewBox="0 0 512 512">
					<path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/>
				</LogoSvg>
			</Logo>
			
			<NavLinks>
				{links.map(({ path, name, icon }) => (
					<NavLink to={path}>
						<Icon icon={icon} />
						{name}
					</NavLink>
				))}
				<NavLink onClick={signOut} to='/'>
					<Icon icon='fa-sign-out' />
					Sign Out
				</NavLink>
			</NavLinks>
		</Base>
	)
};
