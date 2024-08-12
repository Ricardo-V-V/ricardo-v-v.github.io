import AboutCards from '../components/AboutCards'
import PageIntro from '../components/PageIntro'
import SkillsSlider from '../components/SkillsSlider'

export default function About() {
	return (
		<>
			<PageIntro title='About'>
				<p>
					I’m Front-end Developer from Alajuela, Costa Rica, passionate about
					coding and building things for the web. I currently work as a Web
					Content Developer, where I also take on the role of a Technical Lead.
				</p>
				<p>
					My focus these days is to improve my professional background working
					with challenging front-end technologies such as Javascript and React.
				</p>
				<p>
					When I’m not at the computer, I’m usually at the gym, hanging out with
					my wife or doing home repairs.
				</p>
			</PageIntro>
			<section className='p-left-lg p-right-lg'>
				<h2 className='mb-30'>What I do!</h2>
				<AboutCards />
			</section>
			<section className='skills-container p-left-lg p-right-lg'>
				<h2 className='mb-30'>Skills</h2>
				<SkillsSlider />
			</section>
		</>
	)
}
