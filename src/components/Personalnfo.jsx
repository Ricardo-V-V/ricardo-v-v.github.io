import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

export default function PersonalInfo() {
	return (
		<div className='personal-info-wrap'>
			<div className='personal-info-img-wrap'>
				<img src='https://placehold.co/240' />
			</div>
			<h4 className='personal-info-name color-black'>Ricardo Villalobos</h4>
			<span className='personal-info-job color-black'>Front-end Developer</span>
			<SocialLinks />
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
		</div>
	)
}
