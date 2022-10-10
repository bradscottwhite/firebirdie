import { Authenticator } from '@aws-amplify/ui-react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { routes } from './routes'

import { API } from 'aws-amplify'
import { getUserByUsername } from './graphql/queries'

import { Main } from './Main'
import { CreateUser } from './comps/base/jsx/CreateUser'

const App = () => {
	return (
		<Authenticator>
			{({ user: { username }, signOut }) => <LogIn username={username} signOut={signOut} />}
		</Authenticator>
	)
}

const LogIn = ({ username, signOut }) => {
	const [ userData, setUserData ] = useState(false)
	const [ loading, setLoading ] = useState(true)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await API.graphql({
					query: getUserByUsername,
					variables: { username },
					authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
				setUserData(data.getUserByUsername.items[0])
			} catch (err) {
				console.log('New user data will be created...', err)
			}
			setLoading(false)
		}
		fetchUser()
	}, [ username ])

	return (
		<BrowserRouter>
			<Main signOut={signOut} username={username}>
				{loading ? (
					<h2>Loading...</h2>
				) : (
					userData ? (
						<Router userData={userData} setUserData={setUserData} />
					) : (
						<CreateUser username={username} setUserData={setUserData} />
					)
				)}
			</Main>
		</BrowserRouter>
	)
}

const Router = ({ userData, setUserData }) => (
	<Routes>
		{routes.map(({ path, El }) => (
			<Route
				path={path}
				element={<El userData={userData} setUserData={setUserData} />}
			></Route>
		))}
	</Routes>
)

export default App;
