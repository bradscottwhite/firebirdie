import { useState } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { updateUser } from './graphql/mutations'

export const Settings  = ({ userData: { id, username, name, avatar }, setUserData }) => {
	const [ newName, setName ] = useState(name)
	const [ newAvatar, setAvatar ] = useState(avatar)

	const handleUpdate = async () => {
		if (newName !== name || newAvatar !== avatar)
			try {
				const input = {
					id,
					username,
					name: newName,
					avatar: newAvatar
				}
				await API.graphql({
					query: updateUser,
					variables: { input, codition: user => user.id === id },
					authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
				console.log(input)
				setUserData(input)
			} catch (err) {
				console.log('error updating user settings', err)
			}
	}

	return (
		<div>
			<h1>User settings</h1>
			
			<p>Name</p>
			<input
				value={newName}
				placeholder='Name'
				onChange={e => setName(e.target.value)}
			/>
			
			<p>Avatar</p>
			<input
				value={newAvatar}
				placeholder='Avatar'
				onChange={e => setAvatar(e.target.value)}
			/>

			
			<button
				className='bg-orange-600 hover:bg-purple-400 py-2 px-4 transition ease-in-out delay-150 duration-300 rounded-md hover:scale-110'
				onClick={handleUpdate}
			>
				<Link to='/'>Update user settings</Link>
			</button>
			
			<Link to='/'>Home</Link>
		</div>
	)
};
