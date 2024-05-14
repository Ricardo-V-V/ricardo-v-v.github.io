import PersonalInfo from './Personalnfo'

export default function MainLayout() {
	return (
		<>
			<p style={{ backgroundColor: 'red', margin: 0, padding: '30px' }}>
				H1 Navbar and Logo
			</p>
			<div className='main-container'>
				<div className='main-col-1'>
					<PersonalInfo />
				</div>
				<div className='main-col-2'>Paginas</div>
			</div>
		</>
	)
}
