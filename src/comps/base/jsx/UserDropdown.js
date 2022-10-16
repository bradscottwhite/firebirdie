import { Link } from 'react-router-dom'

import { API } from 'aws-amplify'
import {
	createFollow,
	deleteFollow
} from '../../../graphql/mutations'

import { Dropdown, DropTop, DropBottom, DropAvatar, DropFollowBtn, DropUnfollowBtn, DropName, DropUsername, DropBio, DropFollowers, DropFollowerCount } from '../styles/dropdownStyles'

export const UserDropdown = ({ name, username, avatar, userData, followers, setFollowers, followId, setFollowId, isName }) => {
	//console.log('Followers',followers)
	//console.log('FollowId',followId)

	const handleFollow = async () => {
		try {
			const { data } = await API.graphql({
				query: createFollow,
				variables: { input: {
					userId: userData.owner,
					followId: username
				}},
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setFollowers([ ...followers, data.createFollow ])
			setFollowId(data.createFollow.id)
		} catch (err) {
			console.log('error following user', err)
		}
	}

	const handleUnfollow = async () => {
		try {
			await API.graphql({
				query: deleteFollow,
				variables: { input: { id: followId } },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})

			setFollowers(followers.filter(id => id === followId))
			setFollowId(false)
		} catch (err) {
			console.log('error unfollowing user', err)
		}
	}

	return (
		<Dropdown
			isName={isName}
			style={{
				transformStyle: 'preserve-3d'
			}}
		>
			<DropTop>
				<DropAvatar
					alt={username}
					src={avatar}
				/>

				<div className='flex justify-end'>
					{(userData.username !== username) ?
						(followId ? (
							<DropUnfollowBtn
								onClick={handleUnfollow}
							>Unfollow</DropUnfollowBtn>
						) : (
							<DropFollowBtn
								onClick={handleFollow}
							>Follow</DropFollowBtn>
						)
					) : (
						<div className='px-20'></div>
					)}
				</div>
			</DropTop>

			<DropBottom>
				<Link to={'/' + username}>
					<DropName>{name}</DropName>
				</Link>

				<DropUsername>@{username}</DropUsername>
				<DropBio>Bio...</DropBio>
				<DropFollowers>
					<DropFollowerCount>
						{followers !== [] ? followers.length : ''}
					</DropFollowerCount>
					Followers
				</DropFollowers>
			</DropBottom>
		</Dropdown>
	)
};
