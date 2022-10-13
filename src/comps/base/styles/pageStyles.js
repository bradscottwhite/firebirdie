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
`

export const Title = tw.h2`
	text-xl
	text-smoky-black
	drop-shadow-lg
`

export const ModeIcon = tw.div`
	fa
	${({ dark }) => !dark ? 'fa-toggle-on' : 'fa-toggle-off'}
	mt-[-1.2rem]
	hover:cursor-pointer
	hover:text-umber
	hover:bg-isabelline
	p-4
	rounded-[3rem]
	text-3xl
	text-smoky-black
	absolute
	right-32
`

export const Body = tw.div`
	overflow-y-scroll
	w-full
	h-[calc(100vh-4rem)]
`;
