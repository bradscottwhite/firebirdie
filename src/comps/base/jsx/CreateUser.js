import { useState } from 'react'

import { API } from 'aws-amplify'
import { createUser } from '../../../graphql/mutations'

import { Page } from './Page'
import { Base, Heading, Username, Fields, Field, Label, Text, SaveBtn, SaveIcon, Btn } from '../styles/createUserStyles'

export const CreateUser = ({ username, setUserData, darkMode, setDarkMode }) => {
	const [ name, setName ] = useState('')
	//const [ avatar, setAvatar ] = useState('')
	const [ bio, setBio ] = useState('')
	const [ color, setColor ] = useState('')

	const handleSubmit = async () => {
		if (color === '') {
			const letters = '0123456789ABCDEF'
			let ranColor = ''
			for (let i = 0; i < 6; i++)
				ranColor += letters[Math.floor(Math.random() * 16)]
			setColor(ranColor)
		}

		const avatarImg = `https://avatar.oxro.io/avatar.svg?name=${name}&background=${color}&length=1`
		
		const input = {
			username,
			name,
			avatar: avatarImg,
			bio: '',
			color
		}
		await API.graphql({
			query: createUser,
			variables: { input },
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
		setUserData(input)
	}

	return (
		<Page title='Create User' darkMode={darkMode} setDarkMode={setDarkMode}>
			<Base>
				<Heading>Howdy <Username>{username}</Username>!</Heading>
				<Fields>
					<Field>
						<Label>Name:</Label>
						<Text
							value={name}
							placeholder='Enter name'
							onChange={e => setName(e.target.value)}
						/>
					</Field>

					<Field>
						<Label>Bio:</Label>
						<Text
							value={bio}
							placeholder='Enter bio text'
							onChange={e => setBio(e.target.value)}
						/>
					</Field>
					
					<Field>
						<Label>Color:</Label>
						<Text
							value={color}
							placeholder='Enter hex color or have it randomly generated'
							onChange={e => setColor(e.target.value)}
						/>
					</Field>
				</Fields>

				<Btn>
					<SaveBtn
						to={`/${username}`}
						onClick={handleSubmit}
					>
						<SaveIcon/>
						Submit
					</SaveBtn>
				</Btn>
			</Base>
		</Page>
	)
};
