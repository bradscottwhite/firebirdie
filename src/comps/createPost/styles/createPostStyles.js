import tw from 'tailwind-styled-components'

import { Base as OldBase, Avatar as OldAvatar, Text as OldText, PostBtn, PostIcon } from '../../home/styles/createPostStyles'

export const Base = tw(OldBase)`
	py-14
	border-none
`

export const Avatar = tw(OldAvatar)`
	w-14
	h-14
`

export const Text = tw(OldText)`
	text-lg
`

export { PostBtn, PostIcon };
