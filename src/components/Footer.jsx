export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer>
			<p style={{ margin: '0', padding: '25px 0', textAlign: 'center' }}>
				© {year} Created by Ricardo Villalobos.
			</p>
		</footer>
	)
}
