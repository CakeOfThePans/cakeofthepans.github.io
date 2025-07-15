import { ExternalLink, Github } from 'lucide-react'
import RevealOnScroll from '../RevealOnScroll'

export default function Projects() {
	const projects = [
		{
			title: 'MatchPoint',
			description:
				'A full stack PERN tennis match prediction platform delivering real-time match predictions, model results, and player rankings, powered by a FastAPI microservice that leverages XGBoost models for match predictions using player rankings, points, and odds.',
			image: '/projects/matchpoint.png',
			alt: 'MatchPoint Screenshot',
			technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS','FastAPI'],
			demoUrl: 'https://matchpoint-y241.onrender.com/',
			githubURL: 'https://github.com/CakeOfThePans/MatchPoint',
		},
		{
			title: 'Portfolio Website',
			description:
				'A modern, responsive portfolio website built with React and TailwindCSS featuring smooth animations, dark/light theme toggle, and a professional design showcasing my projects and skills.',
			image: '/projects/portfolio.png',
			alt: 'Portfolio Website Screenshot',
			technologies: ['JavaScript', 'React', 'Tailwind CSS'],
			demoUrl: 'https://your-portfolio-url.com',
			githubURL: 'https://github.com/CakeOfThePans/Portfolio',
		},
		{
			title: 'ToDoAI',
			description:
				'A full stack MERN to do list application featuring drag and drop functionality for calendar events and reordering tasks and lists with a conversational AI interface powered by Langchain to assist users in managing their tasks.',
			image: '/projects/todoai.png',
			alt: 'ToDoAI Screenshot',
			technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS', 'Langchain'],
			demoUrl: 'https://todoai-ttv4.onrender.com/',
			githubURL: 'https://github.com/CakeOfThePans/ToDoAI',
		},
	]

	return (
		<section
			id="projects"
			className="flex items-center justify-center py-36 scroll-mt-16"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<RevealOnScroll>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
						Projects
					</h2>
					<p className=" mb-6 text-center mx-auto">
						Here are some of the projects I've worked on, showcasing my skills
						in various technologies and problem domains.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => {
							return (
								<div
									key={index}
									className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
								>
									<div className="overflow-hidden rounded-xl p-1">
										<img
											src={project.image}
											alt={project.alt}
											className="rounded-lg"
										/>
									</div>
									<div className="px-4 py-6">
										<h3 className="text-xl font-bold mb-4">{project.title}</h3>
										<p className="mb-4">{project.description}</p>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((lang) => (
												<span
													key={lang}
													className="text-primary bg-primary/10 border border-border py-1 px-3 rounded-full text-sm"
												>
													{lang}
												</span>
											))}
										</div>
										<div className="mt-4 flex space-x-4">
											<a
												href={project.githubURL}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-background border border-border py-1 px-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex gap-2 items-center"
											>
												<Github size="20px" />
												Github
											</a>
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-background border border-border py-1 px-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex gap-2 items-center"
											>
												<ExternalLink size="20px" />
												Live Demo
											</a>
										</div>
									</div>
								</div>
							)
						})}
					</div>
					{/* TODO: Add a show more button in the future */}
				</RevealOnScroll>
			</div>
		</section>
	)
}
