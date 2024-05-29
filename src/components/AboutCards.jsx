import Card from '../components/Card'
import IconCard from './IconCard'

export default function AboutCards() {
	return (
		<div className='cards-grid'>
			<div className='cards-grid-col-1'>
				<Card bgColor={'#fff4f4'}>
					{/* Build Icon Cards */}
					<IconCard
						title={'React Development'}
						description={
							'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.'
						}
						icon={'U'}
					/>
				</Card>
				<Card bgColor={'#eef5fa'}>
					<IconCard
						title={'Ui/Ux Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.'
						}
						icon={'A'}
					/>
				</Card>
			</div>
			<div className='cards-grid-col-2'>
				<Card bgColor={'#eef5fa'}>
					<IconCard
						title={'Ui/Ux Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.'
						}
						icon={'A'}
					/>
				</Card>
				<Card bgColor={'#fff4f4'}>
					{/* Build Icon Cards */}
					<IconCard
						title={'Ui/Ux Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.'
						}
						icon={'U'}
					/>
				</Card>
			</div>
		</div>
	)
}
