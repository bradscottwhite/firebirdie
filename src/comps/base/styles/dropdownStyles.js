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
	${({ name }) => name && 'ml-14 mt-[-2rem]'}
	h-full
	rounded-lg
	shadow-md
	drop-shadow-xl
	dark:shadow-cinereous
	z-50
`

export const DropTop = tw.div`
	flex
`

export const DropBottom = tw.div`
	grid
`

export const DropAvatar = tw(Avatar)`
	z-0
	inline-flex
	items-center
	ml-1
	mt-1
`

export const DropFollowBtn = tw.div`
	ml-10
`

export const DropName = tw(Name)`
	pt-2
	pl-2
`

export const DropStats = tw.div`flex`

export const DropUsername = tw(Username)``

export const DropFollowInfo = tw.div``

export const DropBio = tw.div``

export const DropFollowStats = tw.div`

`;
