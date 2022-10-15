import tw from 'tailwind-styled-components'

export const Base = tw.div`
	
`

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
	drop-shadow-xl
	mt-[-4rem]
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
`

;
