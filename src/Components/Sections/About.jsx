import { Briefcase, GraduationCap } from 'lucide-react'
import RevealOnScroll from '../RevealOnScroll'

export default function About() {
	return (
		<section
			id="about"
			className="flex items-center justify-center py-36 scroll-mt-16"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<RevealOnScroll>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
						About Me
					</h2>
					<p className="mb-4">
						Hello! I'm Cary Ho, a computer science and data science student with
						a deep interest in building meaningful, user-driven applications. My
						focus is on full-stack development, where I combine my technical
						skills with a love for creative problem-solving. I thrive on
						learning new technologies and tackling challenges that push the
						boundaries of innovation. Whether it’s designing intuitive web apps
						or integrating AI to streamline processes, I aim to deliver
						impactful solutions that make a difference.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
						<div className="rounded-xl p-4 bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<GraduationCap />
								Education
							</h3>
							<div className="mb-2">
								<strong>
									Bachelor of Arts in Computer Science and Data Science
								</strong>{' '}
								- New York University (2022 - Present)
							</div>
							<ul className="list-disc pl-5">
								<li>
									Relevant Courses: Data Structures, Computer Systems
									Organization, Basic Algorithms, Applied Internet Technology,
									Discrete Mathematics, Linear Algebra, Probability and
									Statistics, Parallel Computing, Principles of Data Science,
									Causal Inference, Fundamentals of Machine Learning,
									Responsible Data Science
								</li>
							</ul>
						</div>
						<div className="rounded-xl p-4 bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Briefcase />
								Work Experience
							</h3>
							<div>
								<strong>Software Developer Intern</strong> - Premium Technology
								Inc (Summer 2024)
								<ul className="list-disc pl-5">
									<li>
										Developed a secure file transfer system with user and group
										rights-based authorization using Spring Boot, Vue, and
										PostgreSQL
									</li>
								</ul>
							</div>
							<div>
								<strong>Clean Energy Intern</strong> - Mobileware (Summer 2023)
								<ul className="list-disc pl-5">
									<li>
										Assisted in the development and refinement of a carpool and
										EV charging application using Node.js, Express, and MongoDB.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<a
							href="/Portfolio/Resume.pdf"
							download
							className="bg-primary text-primary-foreground font-medium px-6 py-2 rounded-md hover:bg-primary/90 hover:scale-105 transition-all"
						>
							Download Resume
						</a>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
