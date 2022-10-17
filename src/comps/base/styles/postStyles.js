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

export const User = tw.div`
	group
	inline-block
`

export const Avatar = tw.img`
	w-10
	h-10
	rounded-full
	ml-4
	sm:ml-8
	mr-3
	sm:mr-4
	drop-shadow-xl
	x-0
`

export const Stats = tw.div`
	flex
	mb-2
	text-pale-silver
	dark:text-umber
`

export const Name = tw(Link)`
	font-semibold
	hover:underline
	text-umber
	dark:text-pale-silver
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
	pl-0.5
	pr-2
	sm:pl-1
	sm:pr-3
	mt-[-0.3rem]
`

export const Text = tw(Link)`
	text-smoky-black
	dark:text-white
`

export const Analytics = tw.div`
	flex
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
	hover:bg-pale-silver
	hover:bg-opacity-25
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
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
`

export const CommentBtn = tw(Link)`
	fa
	fa-comment
	text-2xl
	pr-2
	ml-20
	mt-2
	hover:text-flame
	hover:bg-opacity-25
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
	text-pale-silver
	dark:text-umber
	z-0
`;
