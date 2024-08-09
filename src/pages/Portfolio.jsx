import PageIntro from '../components/PageIntro'
import PortfolioCards from '../components/PortfolioCards'

export default function Portfolio() {
	return (
		<>
			<PageIntro title='Portfolio' />
			<section className='mt-30 p-left-lg p-right-lg'>
				<PortfolioCards />
			</section>
		</>
	)
}
