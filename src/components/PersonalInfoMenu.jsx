import { Link } from 'react-router-dom'
import { FaUser, FaBriefcase } from 'react-icons/fa'

export default function PersonalInfoMenu() {
	return (
		<ul className='personal-info-menu'>
			<li>
				<Link className='personal-info-menu-link' to='/'>
					<FaUser size='20px' />
					About
				</Link>
			</li>
			<li>
				<Link className='personal-info-menu-link' to='/portfolio'>
					<FaBriefcase size='20px' /> Portfolio
				</Link>
			</li>
		</ul>
	)
}
