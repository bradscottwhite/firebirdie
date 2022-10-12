import { Base, Header, Title, Body } from '../styles/pageStyles'

export const Page = ({ children, title }) => {
	return (
		<Base>
			<Header>
				<Title>{title}</Title>
			</Header>

			<Body>
				{children}
			</Body>
		</Base>
	)
};
