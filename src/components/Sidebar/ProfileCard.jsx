// import { faker } from '@faker-js/faker'
// import { Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function ProfileCard(props) {
	return (
		<div className="flex items-center justify-between bg-[#fff] rounded-md  p-2">
			<div className="flex items-center gap-2 ">
				{/* <Avatar>H</Avatar> */}
				<div className="flex flex-col">
					<p className="mb-0 text-sm font-bold">Doom Guy</p>
					<p className="mb-0 text-xs">doomguy@devil.com</p>
				</div>
			</div>
			<FontAwesomeIcon icon={faArrowRightFromBracket} />
		</div>
	)
}

export default ProfileCard
