import Header from './Header'
import PageContentWrap from './PageContentWrap'
import PersonalInfo from './Personalnfo'

export default function MainLayout() {
	return (
		<>
			<Header />
			<div className='main-container pt-50'>
				<div className='main-col-1'>
					<PersonalInfo />
				</div>
				<div className='main-col-2'>
					<PageContentWrap />
				</div>
			</div>
		</>
	)
}
