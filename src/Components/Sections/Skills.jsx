import {
	Brain,
	Code,
	Database,
	PanelsTopLeft,
	Terminal,
	Wrench,
} from 'lucide-react'
import RevealOnScroll from '../RevealOnScroll'

export default function Skills() {
	const languages = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS']
	const frontend = ['React', 'Vue', 'Tailwind CSS', 'Redux']
	const backend = ['Node.js', 'Express', 'Spring Boot', 'RESTful APIs']
	const databases = ['MongoDB', 'PostgreSQL']
	const ds = ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib']
	const tools = ['Git', 'Github', 'VS Code', 'Postman', 'Jupyter Notebook']

	return (
		<section
			id="skills"
			className="flex items-center justify-center py-36 scroll-mt-16"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<RevealOnScroll>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
						Skills
					</h2>
					<p className=" mb-6 text-center mx-auto">
						These are some of the technologies and skills that I've acquired
						over the years
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Terminal
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Programming Languages
							</h3>
							<div className="flex flex-wrap gap-2">
								{languages.map((lang) => (
									<span
										key={lang}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{lang}
									</span>
								))}
							</div>
						</div>
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<PanelsTopLeft
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Frontend Development
							</h3>
							<div className="flex flex-wrap gap-2">
								{frontend.map((tech) => (
									<span
										key={tech}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Code
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Backend Development
							</h3>
							<div className="flex flex-wrap gap-2">
								{backend.map((tech) => (
									<span
										key={tech}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Database
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Databases
							</h3>
							<div className="flex flex-wrap gap-2">
								{databases.map((db) => (
									<span
										key={db}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{db}
									</span>
								))}
							</div>
						</div>
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Brain
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Data Science
							</h3>
							<div className="flex flex-wrap gap-2">
								{ds.map((lib) => (
									<span
										key={lib}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{lib}
									</span>
								))}
							</div>
						</div>
						<div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Wrench
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								Developer Tools
							</h3>
							<div className="flex flex-wrap gap-2">
								{tools.map((tool) => (
									<span
										key={tool}
										className="bg-background border border-border py-1 px-3 rounded-full text-sm"
									>
										{tool}
									</span>
								))}
							</div>
						</div>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
