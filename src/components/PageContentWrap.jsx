import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function PageContentWrap() {
	return (
		<div className='page-content-wrap'>
			<Outlet />
			<Footer />
		</div>
	)
}
