export default function PageIntro({ children, title = 'Add Title' }) {
	return (
		<div className='p-top-lg p-left-lg p-right-lg'>
			<h1 className='page-content-title color-black'>{title}</h1>
			{children}
		</div>
	)
}
