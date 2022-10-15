import tw from 'tailwind-styled-components'

export const Hero = tw.div`
	w-full
	h-48
	bg-gradient-to-br
	from-flame
	to-white
	dark:to-smoky-black
`

export const Avatar = tw.img`
	w-32
	h-32
	rounded-full
	ml-12
	mr-4
	mt-[-4rem]
	border-2
	border-white
	dark:border-smoky-black
`

export const FollowBtn = tw.button`
	ml-4
	mr-10
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

export const UnfollowBtn = tw.button`
	ml-4
	mr-10
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

export const Bio = tw.div`
	grid
	pl-10
	py-2
`

export const Name = tw.div`
	font-semibold
	text-umber
	dark:text-pale-silver
	text-xl
`

export const Username = tw.i`
	pt-0
	pb-2
	text-md
	text-pale-silver
	dark:text-cinereous
`

;
