import { useState } from 'react'

import { API } from 'aws-amplify'
import { createUser } from '../../../graphql/mutations'

export const CreateUser = ({ username, setUserData }) => {
	const [ name, setName ] = useState('')
	const [ avatar, setAvatar ] = useState('')

	const handleSubmit = async () => {
		const letters = '0123456789ABCDEF'
		let color = ''
		for (let i = 0; i < 6; i++)
			color += letters[Math.floor(Math.random() * 16)]

		const avatarImg = avatar === '' ? `https://avatar.oxro.io/avatar.svg?name=${name}&background=${color}&length=1` : avatar
		
		const input = {
			username,
			name,
			avatar: avatarImg
		}
		await API.graphql({
			query: createUser,
			variables: { input },
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
		setUserData(input)
	}

	return (
		<main>
			<h1>Howdy {username}!</h1>
			<h3>Setup user settings:</h3>
			
			<input
				value={name}
				placeholder='Profile name'
				onChange={e => setName(e.target.value)}
			/>
			
			<input
				value={avatar}
				placeholder='Avatar image url'
				onChange={e => setAvatar(e.target.value)}
			/>

			<button
				className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
				onClick={handleSubmit}
			>Set user settings</button>
		</main>
	)
};
