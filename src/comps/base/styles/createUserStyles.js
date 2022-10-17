import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

export const Base = tw.div`
	flex
	grid
	w-full
	pt-6
	pb-10
`

export const Heading = tw.h2`
	px-4
	sm:px-8
	text-lg
	text-smoky-black
	dark:text-white
	py-2
`

export const Username = tw.span`
	font-semibold
	text-umber
	dark:text-pale-silver
`

export const Fields = tw.div`
	py-2
	border-b-[1px]
	border-isabelline
	dark:border-cinereous
`

export const Field = tw.div`
	flex
	py-3
`

export const Label = tw.h2`
	px-4
	sm:pl-8
	text-smoky-black
	dark:text-white
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

export const SaveBtn = tw(Link)`
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

export const SaveIcon = tw.div`
	fa
	fa-check-circle
	text-2xl
	pr-2
`

export const Btn = tw.div`
	flex
	w-full
	justify-end
	pr-4
	py-4
`;
