import tw from 'tailwind-styled-components'

import { Base as OldBase, User as OldUser, Avatar as OldAvatar, Name as OldName, Stats as OldStats, Username as OldUsername, Time as OldTime, TimeDot as OldTimeDot, Analytics as OldAnalytics, Likes as OldLikes, LikeCount as OldLikeCount, LikeBtn as OldLikeBtn, LikeIcon as OldLikeIcon, UnlikeIcon as OldUnlikeIcon } from '../../base/styles/postStyles'

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

export const User = tw(OldUser)``

export const Avatar = tw(OldAvatar)`
	w-14
	h-14
	mt-[-0.5rem]
`

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
	px-4
	sm:px-8
	text-pale-silver
	dark:text-umber
`

export const Analytics = tw(OldAnalytics)`
	flex
	justify-center
	pt-2
	border-t-[1px]
	border-isabelline
	dark:border-cinereous
`

export const Likes = tw(OldLikes)`
`

export const LikeCount = tw(OldLikeCount)``
export const LikeBtn = tw(OldLikeBtn)``
export const LikeIcon = tw(OldLikeIcon)``
export const UnlikeIcon = tw(OldUnlikeIcon)``

export const DeleteBtn = tw.button`
	fa
	fa-trash
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
`
