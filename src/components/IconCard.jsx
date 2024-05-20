export default function IconCard({ title, description, icon }) {
	return (
		<div className='icon-card-wrap'>
			<div className='personal-info-menu-icon icon-card-icon'>{icon}</div>
			<div>
				<h4 className='mb-10'>{title}</h4>
				<p className='mb-0'>{description}</p>
			</div>
		</div>
	)
}
