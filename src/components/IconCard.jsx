export default function IconCard({ title, description, icon }) {
	return (
		<div className='icon-card-wrap'>
			<div className='personal-info-menu-icon icon-card-icon'>{icon}</div>
			<div className='icon-card-body'>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}
