import tw from 'tailwind-styled-components'

import { Avatar, Name, Username } from './postStyles'

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
	dark:border-cinereous
	px-1
	py-1
	ml-20
	mt-[-3rem]
	${({ isName }) => isName && 'ml-14 mt-[-2rem]'}
	rounded-lg
	shadow-md
	drop-shadow-xl
	dark:shadow-cinereous
	z-50
	cursor-default
`

export const DropTop = tw.div`
	flex
	justify-between
`

export const DropBottom = tw.div`grid`

export const DropAvatar = tw(Avatar)`
	z-0
	inline-flex
	items-center
	ml-1
	mt-2
	w-14
	h-14
`

export const DropFollowBtn = tw.button`
	ml-10
	mr-2
	mt-4
	rounded-[3rem]
	py-2
	px-6
	text-white
	dark:text-smoky-black
	hover:text-isabelline
	dark:hover:text-umber
	bg-smoky-black
	dark:bg-white
	hover:bg-umber
	hover:bg-opacity-25
	rounded-[3rem]
	transition
	ease-in-out
	delay-150
	duration-300
	hover:scale-110
	hover:drop-shadow-xl
	drop-shadow-lg
`

export const DropUnfollowBtn = tw.button`
	ml-10
	mr-2
	mt-4
	rounded-[3rem]
	py-2
	px-6
	text-smoky-black
	dark:text-white
	hover:text-umber
	dark:hover:text-pale-silver
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
	border-[1px]
	border-pale-silver
	dark:border-cinereous
`

export const DropName = tw(Name)`
	pt-2
	pl-2
	text-lg

	block
`

export const DropUsername = tw(Username)`
	text-pale-silver
	dark:text-cinereous
`

export const DropBio = tw.div`
	text-smoky-black
	dark:text-white
	px-2
	py-2
`

export const DropFollowers = tw.div`
	text-pale-silver
	dark:text-cinereous
	flex
	pl-2
	pt-1
	pb-2
`

export const DropFollowerCount = tw.div`
	text-smoky-black
	dark:text-white
	pr-1
`;
