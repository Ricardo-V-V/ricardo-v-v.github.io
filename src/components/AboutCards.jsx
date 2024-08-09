import Card from '../components/Card'
import IconCard from './IconCard'

export default function AboutCards() {
	return (
		<div className='cards-grid'>
			<div className='cards-grid-col-1'>
				<Card bgColor={'#fff4f4'}>
					{/* Build Icon Cards */}
					<IconCard
						title={'Web Development'}
						description={
							'I bring hands-on experience with HTML, CSS, Bootstrap, Sass, Git, Javascript, React an more.'
						}
						name={'Web Development'}
					/>
				</Card>
				<Card bgColor={'#eef5fa'}>
					<IconCard
						title={'Internet Marketing'}
						description={
							'I’ve strong experience working in online marketing and search engine optimization SEO.'
						}
						name={'Internet Marketing'}
					/>
				</Card>
			</div>
			<div className='cards-grid-col-2'>
				<Card bgColor={'#eef5fa'}>
					<IconCard
						title={'Ui/Ux Design'}
						description={
							'I enjoy working closely with design teams to help them bring their projects to life.'
						}
						name={'Web Design'}
					/>
				</Card>
				<Card bgColor={'#fff4f4'}>
					{/* Build Icon Cards */}
					<IconCard
						title={'Software Engineer'}
						description={
							'I’m an advanced software engineering student with a strong coding background.'
						}
						name={'Book'}
					/>
				</Card>
			</div>
		</div>
	)
}
