import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

export const Base = tw.div`
	w-1/4
	h-screen
	overflow-hidden
	border-r-[1px]
	border-isabelline
	dark:border-cinereous
`

export const Logo = tw(Link)`
	flex
	justify-center
	my-4
	py-2
	mx-24
	text-flame
	hover:bg-isabelline
	hover:bg-opacity-25
	dark:hover:bg-pale-silver
	rounded-full
	hover:cursor-pointer
	hover:drop-shadow-xl
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
`

export const LogoSvg = tw.svg`
	w-10
	h-10
	mx-1
`

export const NavLinks = tw.div`
	flex
	grid
	w-full
	justify-center
	mt-8
`

export const NavLink = tw(Link)`
	w-full
	py-4
	px-6
	my-2
	text-smoky-black
	dark:text-white
	hover:text-umber
	dark:hover:text-isabelline
	hover:bg-isabelline
	hover:bg-opacity-25
	dark:hover:bg-pale-silver
	rounded-full
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
	text-lg
`

export const Icon = tw.div`
	fa ${({ icon }) => icon}
	text-3xl
	pr-10
`;
