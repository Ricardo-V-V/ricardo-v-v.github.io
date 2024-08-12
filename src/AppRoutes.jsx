import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='*' element={<About />} />
				</Route>
			</Routes>
		</Router>
	)
}
