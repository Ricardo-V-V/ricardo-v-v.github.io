export default function IconCard({ title, description, name }) {
	return (
		<div className='icon-card-wrap'>
			<div className='personal-info-menu-icon icon-card-icon'>
				<img
					src={`src/img/${name}-icon.png`}
					alt={`${name} icon`}
					width={'40px'}
					height={'auto'}
				/>
			</div>
			<div>
				<h4 className='mb-10'>{title}</h4>
				<p className='mb-0'>{description}</p>
			</div>
		</div>
	)
}
