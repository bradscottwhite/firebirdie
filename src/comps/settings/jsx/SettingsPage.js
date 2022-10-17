import { useState } from 'react'

import { API } from 'aws-amplify'
import { updateUser } from '../../../graphql/mutations'

import { Page } from '../../base/jsx/Page'
import { Base, Fields, Field, Label, Text, CancelBtn, CancelIcon, SaveBtn, SaveIcon, Btns } from '../styles/settingsStyles'

export const SettingsPage  = ({ userData: { id, username, name, avatar, bio, color }, setUserData, darkMode, setDarkMode }) => {
	const [ newName, setName ] = useState(name)
//	const [ newUsername, setUsername ] = useState(username)
	const [ newBio, setBio ] = useState(bio)
	//const [ newAvatar, setAvatar ] = useState(avatar)
	const [ newColor, setColor ] = useState(color)

	const handleUpdate = async () => {
		if (
			newName !== name
			//|| newUsername !== username
			//|| newAvatar !== avatar
			|| newBio !== bio
			|| newColor !== color
		)
			try {
				const input = {
					id,
					username,//: newUsername,
					name: newName,
					avatar: `https://avatar.oxro.io/avatar.svg?name=${newName}&background=${newColor}&length=1`,
					bio: newBio,
					color: newColor
				}
				await API.graphql({
					query: updateUser,
					variables: { input, codition: user => user.id === id },
					authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
				setUserData(input)
			} catch (err) {
				console.log('error updating user settings', err)
			}
	}

	return (
		<Page title='User Settings' darkMode={darkMode} setDarkMode={setDarkMode}>
			<Base>
				<Fields>
					{/*<Text
						value={newUsername}
						placeholder='Enter new username'
						onChange={e => (e.target.value)}
					/>*/}
				
					<Field>
						<Label>Name:</Label>
						<Text
							value={newName}
							placeholder='Enter a new name'
							onChange={e => setName(e.target.value)}
						/>
					</Field>

					<Field>
						<Label>Bio:</Label>
						<Text
							value={newBio}
							placeholder='Enter a new bio'
							onChange={e => setBio(e.target.value)}
						/>
					</Field>
					
					<Field>
						<Label>Color:</Label>
						<Text
							value={newColor}
							placeholder='Enter a new color'
							onChange={e => setColor(e.target.value)}
						/>
					</Field>
				</Fields>

				<Btns>
					<CancelBtn
						to={`/${username}`}
					>
						<CancelIcon/>
						Cancel
					</CancelBtn>

					<SaveBtn
						to={`/${username}`}
						onClick={handleUpdate}
					>
						<SaveIcon/>
						Save
					</SaveBtn>
				</Btns>
			</Base>
		</Page>
	)
};
