import tw from 'tailwind-styled-components'

export const Base = tw.div`
	border-b-2
	border-purple-700
	flex
	py-6
`

export const Avatar = tw.img`
	w-12
	h-12
	rounded-[3rem]
	mx-4
	drop-shadow-xl
`

export const Text = tw.input`
	bg-inherit
	w-2/5
	px-4
	text-purple-900
	placeholder-purple-900
	text-md
	focus:outline-none
`

export const PostBtn = tw.button`
	rounded-[3rem]
	py-2
	px-6
	text-purple-800
	hover:text-white
	hover:bg-purple-700
	rounded-[3rem]
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
	text-lg
`

export const PostIcon = tw.div`
	fa
	fa-pencil
	text-2xl
	pr-2
`;
