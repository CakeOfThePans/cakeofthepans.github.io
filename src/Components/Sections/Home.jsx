import RevealOnScroll from '../RevealOnScroll'

export default function Home() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center pt-8 px-8 scroll-mt-16"
		>
			<div className="text-center px-4 pt-16">
				<RevealOnScroll>
					<h1 className="p-1 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
						Hi, I'm Cary Ho
					</h1>
					<p className="text-lg  max-w-xl mx-auto my-4">
						I'm a passionate computer science and data science student with a
						focus on full-stack development. I love building innovative
						solutions and exploring new technologies.
					</p>
					<div className="flex justify-center space-x-4">
						<a
							href="#projects"
							className="bg-primary text-primary-foreground font-medium px-6 py-2 rounded-md hover:bg-primary/90 hover:scale-105 transition-all"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="bg-card border border-border font-medium px-6 py-2 rounded-md hover:bg-primary/90 hover:border-primary/90 hover:text-primary-foreground hover:scale-105 transition-all"
						>
							Contact Me
						</a>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
