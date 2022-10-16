import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

const isMobile = window.innerWidth <= 350

export const Base = tw.div`
	${() => isMobile && 'w-screen'}
	sm:w-1/4
	${() => isMobile ? 'absolute' : 'relative'}
	bottom-0
	sm:h-screen
	overflow-hidden
	bg-white
	dark:bg-smoky-black
	${() => isMobile ? 'border-t-[1px]' : 'border-r-[1px]'}

	sm:border-r-[1px]
	border-isabelline
	dark:border-cinereous
	z-50
	sm:z-0
`

export const Logo = tw(Link)`
	flex
	justify-center
	my-4
	py-2
	mx-4
	sm:mx-24
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
	sm:mx-1
`

export const NavLinks = tw.div`
	flex
	sm:grid
	${() => !isMobile && 'grid'}
	w-full
	justify-center
	mt-1
`

export const NavLink = tw(Link)`
	w-full
	py-4
	px-6
	mx-2
	sm:mx-0
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
	flex
`

export const Icon = tw.div`
	fa ${({ icon }) => icon}
	text-3xl
	sm:pr-10
`

export const Name = tw.p`
	hidden
	sm:block
`;
