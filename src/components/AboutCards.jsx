import Card from '../components/Card'
import IconCard from './IconCard'
import { BsBrush, BsCodeSlash, BsMegaphone, BsBook } from 'react-icons/bs'

export default function AboutCards() {
	return (
		<div className='about-cards'>
			<Card bgColor={'bg-primary-light'}>
				<IconCard
					title={'Web Development'}
					description={
						'I bring hands-on experience with HTML, CSS, Bootstrap, Sass, Git, Javascript, React an more.'
					}
					name={'Web Development'}
				>
					<BsCodeSlash size='32px' color='#1c5cd8' className='mb-10' />
				</IconCard>
			</Card>
			<Card bgColor={'bg-grey-light'}>
				<IconCard
					title={'Internet Marketing'}
					description={
						'I’ve strong experience working in online marketing and search engine optimization SEO.'
					}
					name={'Internet Marketing'}
				>
					<BsMegaphone size='32px' color='#1c5cd8' className='mb-10' />
				</IconCard>
			</Card>
			<Card bgColor={'bg-grey-light'}>
				<IconCard
					title={'Ui/Ux Design'}
					description={
						'I enjoy working closely with design teams to help them bring their projects to life.'
					}
					name={'Web Design'}
				>
					<BsBrush size='32px' color='#1c5cd8' className='mb-10' />
				</IconCard>
			</Card>
			<Card bgColor={'bg-primary-light'}>
				<IconCard
					title={'Software Engineer'}
					description={
						'I’m an advanced software engineering student with a strong coding background.'
					}
					name={'Book'}
				>
					<BsBook size='32px' color='#1c5cd8' className='mb-10' />
				</IconCard>
			</Card>
		</div>
	)
}
