export default function Card({ children, bgColor }) {
	console.log(bgColor)
	return (
		<div className='card-wrap' style={{ backgroundColor: bgColor }}>
			{children}
		</div>
	)
}
