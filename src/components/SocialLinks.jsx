import { FaLinkedinIn, FaEnvelopeOpenText, FaGithub } from 'react-icons/fa'
export default function SocialLinks() {
	return (
		<ul className='personal-info-social-links'>
			<li>
				<a
					href='https://github.com/Ricardo-V-V'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub size='20px' color='#1c5cd8' />
				</a>
			</li>
			<li>
				<a
					href='mailto:ricvillalobosv@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaEnvelopeOpenText size='20px' color='#1c5cd8' />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/ricardo-villalobos'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedinIn size={'20px'} color='#1c5cd8' />
				</a>
			</li>
		</ul>
	)
}
