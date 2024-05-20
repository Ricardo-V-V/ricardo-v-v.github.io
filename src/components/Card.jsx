export default function Card({ children, bgColor }) {
	return (
		<div className='card-wrap' style={{ backgroundColor: bgColor }}>
			{children}
		</div>
	)
}
