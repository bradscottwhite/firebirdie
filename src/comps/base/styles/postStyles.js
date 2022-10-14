import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Base = tw(motion.div)`
	border-b-[1px]
	border-isabelline
	dark:border-cinereous
	flex
	pt-4
	pb-2
	hover:bg-isabelline
	dark:hover:bg-inherit
	hover:cursor-pointer
	transition
	ease-in-out
	delay-150
	duration-300
	hover:drop-shadow-md
`

export const User = tw(Link)`
	group
	inline-block
`

export const Avatar = tw.img`
	w-10
	h-10
	rounded-full
	ml-8
	mr-4
	drop-shadow-xl
	z-0
	inline-flex
	items-center
`

export const Dropdown = tw.div`
	group-hover:block
	hidden
	absolute
	hover:flex
	transition
	ease-in-out
	delay-150
	duration-300
	bg-white
	dark:bg-smoky-black
	border-pale-silver
	dark:border-umber
	p-10
	ml-20
	mt-[-3rem]
	${({ name }) => name && 'ml-14 mt-[-2rem]'}
	h-full
	rounded-lg
	shadow-md
	drop-shadow-xl
	z-50
`

export const Stats = tw.div`
	flex
	mb-2
	text-pale-silver
	dark:text-umber
`

export const Name = tw.h3`
	font-semibold
	hover:underline
	text-umber
	dark:text-pale-silver
	text-md
	z-0
	inline-flex
	items-center
`

export const Username = tw.i`
	px-2
	py-0.5
	text-sm
`

export const Time = tw.p`
	text-sm
	py-0.5
`

export const TimeDot = tw.b`
	font-bold
	text-2xl
	pl-1
	pr-3
	mt-[-0.3rem]
`

export const Text = tw(Link)`
	text-smoky-black
	dark:text-white
	text-md
`

export const Likes = tw.div`
	flex
	text-pale-silver
	dark:text-umber
`

export const LikeCount = tw.p`
	py-4
	text-sm
`

export const LikeBtn = tw.button`
	rounded-full
	w-10
	h-10
	mx-4
	pl-2
	my-0.5
	hover:text-flame
	hover:bg-vermillion
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
	text-md
`

export const LikeIcon = tw.div`
	fa
	fa-thumbs-up
	text-2xl
	pr-2
`

export const UnlikeIcon = tw.div`
	fa
	fa-thumbs-up
	text-2xl
	pr-2
	text-flame
`;
