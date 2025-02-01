export default function Card({ children, bgColor, animation = '' }) {
	return <div className={`card-wrap ${animation} ${bgColor}`}>{children}</div>
}
