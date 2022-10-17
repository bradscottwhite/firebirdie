import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

import { User as OldUser, Avatar as OldAvatar, Name as OldName, Stats as OldStats, Username as OldUsername, Time as OldTime, TimeDot as OldTimeDot, Analytics as OldAnalytics, Likes as OldLikes, LikeCount as OldLikeCount, LikeBtn as OldLikeBtn, LikeIcon as OldLikeIcon, UnlikeIcon as OldUnlikeIcon } from '../../base/styles/postStyles'

export const Base = tw.div`
	/*sm:w-[87.5vw]*/
	w-full
	sm:w-[45vw]
	grid
	border-b-[1px]
	border-isabelline
	dark:border-cinereous
	pt-4
	pb-2
`

export const User = OldUser
export const Avatar = OldAvatar
export const Name = OldName

export const UserInfo = tw(OldStats)`grid`

export const Username = tw(OldUsername)`pl-0`

export const Text = tw.p`
	px-4
	sm:px-8
	text-smoky-black
	dark:text-white
`

export const Time = tw(OldTime)`
	py-2
	px-4
	sm:px-8
	text-pale-silver
	dark:text-umber
	flex
`

export const TimeDot = tw(OldTimeDot)`
	ml-2
	mt-[-0.4rem]
`

export const Analytics = tw(OldAnalytics)`
	flex
	justify-center
	pt-2
	border-t-[1px]
	border-isabelline
	dark:border-cinereous
`

export const Likes = OldLikes
export const LikeCount = OldLikeCount
export const LikeBtn = OldLikeBtn
export const LikeIcon = OldLikeIcon
export const UnlikeIcon = OldUnlikeIcon

export const DeleteBtn = tw(Link)`
	fa
	fa-trash
	text-2xl
	px-2
	ml-20
	my-2
	hover:text-flame
	hover:bg-pale-silver
	rounded-full
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
`
