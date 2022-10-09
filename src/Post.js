import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import { getUserByUsername } from './graphql/queries'

export const Post = ({ id, body, postTime, owner }) => {
	const [ { username, name, avatar }, setUserData ] = useState({})

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await API.graphql({
					query: getUserByUsername,
					variables: { username: owner }
				})
				setUserData(data.getUserByUsername.items[0])
			} catch (err) {
				console.log('error fetching user data', err)
			}
		}
		fetchUser()
	}, [ owner ])

	const time = postTime
	//console.log(postTime)

	return (
		<Link to={`/${username}/${id}`}>
			<div>
				<img
					alt={username}
					src={avatar}
					className='w-10 h-10 rounded-3xl'
				/>
				<h3 className='text-xl text-orange-400'><b>{name}</b> <i>@{username}</i> - {time}</h3>
				<p>{body}</p>
				{/* likes, comments... */}
			</div>
		</Link>
	)
};
