export default function PageContentWrap({ children, pageTitle = 'No Title' }) {
	return (
		<div className='page-content-wrap'>
			<div className='p-top-lg p-left-lg p-right-lg'>
				<h1 className='page-content-title'>{pageTitle}</h1>
			</div>
			{children}
		</div>
	)
}
