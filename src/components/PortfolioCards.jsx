import Card from '../components/Card'

export default function PortfolioCards() {
	return (
		<div className='cards-grid'>
			<div className='cards-grid-col-1'>
				<Card bgColor={'#fff4f4'} animation='scale-up-center'>
					<div
						className='portfolio-card-img-container mb-10'
						style={{ backgroundColor: '#ffd296' }}
					>
						<img
							src={`img/portfolio.png`}
							alt={'Portfolio Website'}
							width={'150px'}
							height={'auto'}
						/>
					</div>
					<p className='portfolio-card-tech'>
						HTML, CSS, Javascript, React, Sass
					</p>
					<h4 className='mb-10'>Portfolio</h4>
					<div className='portfolio-card-links'>
						<a
							href='https://github.com/Ricardo-V-V/ricardo-v-v.github.io'
							target='_blank'
						>
							GitHub
						</a>
						<a href='https://ricardo-v-v.github.io/' target='_blank'>
							Live Preview
						</a>
					</div>
				</Card>
				<Card bgColor={'#eef5fa'} animation='scale-up-center'>
					<div
						className='portfolio-card-img-container mb-10'
						style={{ backgroundColor: '#3babfe' }}
					>
						<img
							src={`img/hospital.png`}
							alt={'Clínica Phillips'}
							width={'150px'}
							height={'auto'}
						/>
					</div>
					<p className='portfolio-card-tech'>HTML, CSS, Javascript</p>
					<h4 className='mb-10'>Clínica Phillips</h4>
					<div className='portfolio-card-links'>
						<a href='https://clinicaphillips.com/' target='_blank'>
							Live Preview
						</a>
					</div>
				</Card>
			</div>
			<div className='cards-grid-col-2'>
				<Card bgColor={'#eef5fa'} animation='scale-up-center'>
					<div
						className='portfolio-card-img-container mb-10'
						style={{ backgroundColor: '#ffd2ea' }}
					>
						<img
							src={`img/shopping.png`}
							alt={'Shopping Cart App'}
							width={'150px'}
							height={'auto'}
						/>
					</div>
					<p className='portfolio-card-tech'>
						HTML, CSS, Javascript, React, Sass, Bootstrap
					</p>
					<h4 className='mb-10'>Shopping Cart App</h4>
					<div className='portfolio-card-links'>
						<a
							href='https://github.com/Ricardo-V-V/shopping-cart'
							target='_blank'
						>
							GitHub
						</a>
						<a
							href='https://ricardo-v-v.github.io/shopping-cart'
							target='_blank'
						>
							Live Preview
						</a>
					</div>
				</Card>
				<Card bgColor={'#fff4f4'} animation='scale-up-center'>
					<div
						className='portfolio-card-img-container mb-10'
						style={{ backgroundColor: '#ffd554' }}
					>
						<img
							src={`img/email-template.png`}
							alt={'HTML Email Template'}
							width={'150px'}
							height={'auto'}
						/>
					</div>
					<p className='portfolio-card-tech'>HTML, CSS</p>
					<h4 className='mb-10'>HTML Email</h4>
					<div className='portfolio-card-links'>
						<a
							href='https://github.com/Ricardo-V-V/email-template'
							target='_blank'
						>
							GitHub
						</a>
						<a
							href='https://ricardo-v-v.github.io/email-template'
							target='_blank'
						>
							Live Preview
						</a>
					</div>
				</Card>
			</div>
		</div>
	)
}
