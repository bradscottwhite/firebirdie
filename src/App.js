import { Authenticator } from '@aws-amplify/ui-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { routes } from './routes'

import { API } from 'aws-amplify'
import { getUserByUsername } from './graphql/queries'

import { Nav } from './comps/base/jsx/Nav'
import { CreateUser } from './comps/base/jsx/CreateUser'

import { Wrapper, Loading } from './comps/base/styles/baseStyles'

const App = () => {
	const [ darkMode, setDarkMode ] = useState(false)

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
			setDarkMode(true)
		else
			setDarkMode(false)

		// Whenever the user explicitly chooses light mode
		//localStorage.theme = 'light'

		// Whenever the user explicitly chooses dark mode
		//localStorage.theme = 'dark'

		// Whenever the user explicitly chooses to respect the OS preference
		//localStorage.removeItem('theme')
	}, [])

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Authenticator>
				{({ user: { username }, signOut }) => <LogIn darkMode={darkMode} setDarkMode={setDarkMode} username={username} signOut={signOut} />}
			</Authenticator>
		</div>
	)
}

const LogIn = ({ username, signOut, darkMode, setDarkMode }) => {
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
			<Wrapper>
				<Nav signOut={signOut} username={username} />
				
				{loading ? (
					<Loading>Loading...</Loading>
				) : (
					userData ? (
						<Router darkMode={darkMode} setDarkMode={setDarkMode} userData={userData} setUserData={setUserData} />
					) : (
						<CreateUser username={username} setUserData={setUserData} />
					)
				)}
			</Wrapper>
		</BrowserRouter>
	)
}

const Router = ({ userData, setUserData, darkMode, setDarkMode }) => (
	<Routes>
		{routes.map(({ path, El }) => (
			<Route
				path={path}
				element={<El darkMode={darkMode} setDarkMode={setDarkMode} userData={userData} setUserData={setUserData} />}
			></Route>
		))}
	</Routes>
)

export default App;
