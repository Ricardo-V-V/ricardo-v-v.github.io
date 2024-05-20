import { Link } from 'react-router-dom'

export default function PersonalInfoMenu() {
	return (
		<ul className='personal-info-menu'>
			<li>
				<Link className='personal-info-menu-link' to='/'>
					<div className='personal-info-menu-icon'>A</div>About
				</Link>
			</li>
			<li>
				<Link className='personal-info-menu-link' to='/portfolio'>
					<div className='personal-info-menu-icon'>P</div>Portfolio
				</Link>
			</li>
		</ul>
	)
}
