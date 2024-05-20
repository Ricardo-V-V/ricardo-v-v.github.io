import AboutCards from '../components/AboutCards'
import PageIntro from '../components/PageIntro'

export default function About() {
	return (
		<>
			<PageIntro title='About'>
				<p>
					Im Creative Director and UI/UX Designer from Sydney, Australia,
					working in web development and print media. I enjoy turning complex
					problems into simple, beautiful and intuitive designs.
				</p>
				<p>
					My aim is to bring across your message and identity in the most
					creative way. I created web design for many famous brand companies.
				</p>
			</PageIntro>
			<section className='p-left-lg p-right-lg'>
				<h2 className='mb-30'>What I do!</h2>
				<AboutCards />
			</section>
		</>
	)
}
