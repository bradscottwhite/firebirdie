import tw from 'tailwind-styled-components'

export const Base = tw.div`
	w-3/4
	h-screen
	overflow-hidden
`

export const Header = tw.div`
	h-16
	pl-20
	py-4
	flex
	border-b-[1px]
	border-isabelline
	dark:border-cinereous
`

export const Title = tw.h2`
	text-xl
	text-smoky-black
	dark:text-white
	drop-shadow-lg
`

export const ModeIcon = tw.div`
	fa
	${({ dark }) => !dark ? 'fa-toggle-on' : 'fa-toggle-off'}
	mt-[-1.2rem]
	hover:cursor-pointer
	hover:text-umber
	dark:hover:text-isabelline
	hover:bg-isabelline
	hover:bg-opacity-25
	hover:dark:bg-umber
	p-4
	rounded-full
	text-3xl
	text-smoky-black
	dark:text-white
	absolute
	right-32
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
`

export const Body = tw.div`
	overflow-y-scroll
	w-full
	sm:w-2/3
	h-[calc(100vh-4rem)]
	border-r-[1px]
	border-isabelline
	dark:border-cinereous
`;
