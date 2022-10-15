import tw from 'tailwind-styled-components'

export const Base = tw.div`
	border-b-[1px]
	border-isabelline
	dark:border-cinereous
	flex
	pt-6
	pb-10
	justify-between
`

export const Avatar = tw.img`
	w-10
	h-10
	rounded-[3rem]
	ml-8
	mr-4
	drop-shadow-xl
`

export const Text = tw.input`
	bg-inherit
	w-2/5
	px-4
	text-smoky-black
	dark:text-white
	placeholder-isabelline
	dark:placeholder-cinereous
	focus:outline-none
	flex-1
`

export const PostBtn = tw.button`
	rounded-[3rem]
	py-2
	px-6
	mr-6
	text-flame
	hover:text-vermillion
	hover:bg-isabelline
	hover:bg-opacity-25
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
