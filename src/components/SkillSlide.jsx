export default function SkillSlide({ name }) {
	return (
		<div className='skills-slide'>
			<img
				className='mb-10'
				src={`/img/${name.toLowerCase()}-logo.png`}
				alt={name}
				width={'64px'}
				height={'auto'}
			/>
			<div>{name}</div>
		</div>
	)
}
