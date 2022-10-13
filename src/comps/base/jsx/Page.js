import { Base, Header, Title, Body, ModeIcon } from '../styles/pageStyles'

export const Page = ({ children, title, darkMode, setDarkMode }) => (
	<Base>
		<Header>
			<Title>{title}</Title>

			<ModeIcon onClick={() => {
				localStorage.theme = !darkMode ? 'dark' : 'light'
				setDarkMode(!darkMode)
			}} dark={darkMode} />
		</Header>

		<Body>
			{children}
		</Body>
	</Base>
);
