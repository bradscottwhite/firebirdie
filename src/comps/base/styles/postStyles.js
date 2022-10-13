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
`

export const Avatar = tw.img`
	w-10
	h-10
	rounded-full
	ml-8
	mr-4
	drop-shadow-xl
`

export const Bio = tw.div`
	bio
	hidden
	bg-acc-bg
	p-10
	absolute
	z-10
	mt-2
	rounded-md
	drop-shadow-xl
`

export const Stats = tw.div`
	flex
	mb-2
	text-pale-silver
	dark:text-umber
`

export const Name = tw.h3`
	font-bold
	hover:underline
	text-umber
	dark:text-pale-silver
`

export const Username = tw.i`
	px-2
`

export const Time = tw.p`
	pl-2
	my-[-0.3rem]
`

export const TimeDot = tw.b`
	font-bold
	text-2xl
	pr-2
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
