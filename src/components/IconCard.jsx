export default function IconCard({ title, description, children }) {
	return (
		<div className='icon-card'>
			{children}
			<h4 className='mb-10'>{title}</h4>
			<p>{description}</p>
		</div>
	)
}
