import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Base = tw(motion.div)`
	border-b-2
	border-isabelline
	flex
	pt-4
	pb-8
`

export const Avatar = tw.img`
	w-12
	h-12
	rounded-[3rem]
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
`

export const Name = tw.h3`
	font-bold
	hover:underline
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
	text-md
	py-4
`

export const LikeBtn = tw.button`
	rounded-[3rem]
	py-2
	px-6
	text-pale-silver
	hover:text-flame
	hover:bg-vermillion
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
