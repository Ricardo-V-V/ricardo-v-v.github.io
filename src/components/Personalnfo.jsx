import PersonalInfoMenu from './PersonalInfoMenu'
import SocialLinks from './SocialLinks'

export default function PersonalInfo() {
	return (
		<div className='personal-info-wrap'>
			<div className='personal-info-img-wrap'>
				<img src='./ricardo-v-v.github.io/img/profile.png' width={'100%'} />
			</div>
			<h4 className='personal-info-name color-black'>Ricardo Villalobos</h4>
			<span className='personal-info-job color-black'>Front-end Developer</span>
			<SocialLinks />
			<PersonalInfoMenu />
		</div>
	)
}
