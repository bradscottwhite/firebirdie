import { CreatePost } from './CreatePost'
import { Timeline } from './Timeline'

export const Home = ({ userData }) => {
	return (
		<div>
			<CreatePost userData={userData} />
			<Timeline />
		</div>
	)
};
