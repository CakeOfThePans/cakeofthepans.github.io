import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { toast } from 'react-toastify'
import RevealOnScroll from '../RevealOnScroll'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		title: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(() => {
				toast.success('Message sent successfully!')
				setFormData({
					name: '',
					email: '',
					title: '',
					message: '',
				})
				setLoading(false)
			})
			.catch(() => {
				toast.error('Failed to send message. Please try again later.')
				setLoading(false)
			})
	}

	return (
		<section
			id="contact"
			className="flex items-center justify-center py-36 scroll-mt-16"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<RevealOnScroll>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
						Get in Touch
					</h2>
					<p className=" mb-8 text-center mx-auto">
						Have a project in mind or just want to say hello? Feel free to reach
						out! I'm always open to discussing new opportunities.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="md:col-span-1 space-y-4">
							<h3 className="text-xl font-semibold mb-6">
								Contact Information
							</h3>
							<div className="flex gap-2 items-center break-all">
								<Mail
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								<div>
									<h4 className="font-medium">Email</h4>
									<a
										href="mailto:caryho1028@gmail.com"
										className=" hover:text-primary transition-colors"
									>
										caryho1028@gmail.com
									</a>
								</div>
							</div>
							<div className="flex gap-2 items-center break-all">
								<Phone
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								<div>
									<h4 className="font-medium">Phone</h4>
									<a
										href="tel:+19175996311"
										className=" hover:text-primary transition-colors"
									>
										+1 (917) 599-6311
									</a>
								</div>
							</div>
							<div className="flex gap-2 items-center break-all">
								<MapPin
									size="38px"
									className="text-primary bg-primary/10 rounded-xl p-2"
								/>
								<div>
									<h4 className="font-medium">Location</h4>
									<p>Great Neck, New York, USA</p>
								</div>
							</div>
							<h3 className="text-xl font-semibold mt-6 mb-4">
								Connect with me
							</h3>
							<div className="flex gap-4 items-center">
								<a
									href="https://github.com/CakeOfThePans"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-card border border-border p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
								>
									<Github size="24px" />
								</a>
								<a
									href="https://www.linkedin.com/in/cary-ho-18b543266/"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-card border border-border p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
								>
									<Linkedin size="24px" />
								</a>
								<a
									href="mailto:caryho1028@gmail.com"
									className="bg-card border border-border p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
								>
									<Mail size="24px" />
								</a>
							</div>
						</div>
						<div className="md:col-span-2 bg-card rounded-xl p-6 border border-border">
							<h3 className="text-xl font-semibold mb-4">Send a Message</h3>
							<form className="space-y-6" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2"
										>
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											placeholder="John Doe"
											className="w-full placeholder:text-foreground/70 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2"
										>
											Your Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder="john@example.com"
											className="w-full placeholder:text-foreground/70 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="title"
										className="block text-sm font-medium mb-2"
									>
										Subject
									</label>
									<input
										type="text"
										id="title"
										name="title"
										required
										value={formData.title}
										onChange={(e) =>
											setFormData({ ...formData, title: e.target.value })
										}
										placeholder="Subject of your message"
										className="w-full placeholder:text-foreground/70 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message
									</label>
									<textarea
										type="text"
										id="message"
										name="message"
										required
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										placeholder="Type your message here"
										className="w-full placeholder:text-foreground/70 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
									/>
								</div>
								<button
									type="submit"
									disabled={loading}
									className="bg-primary text-primary-foreground font-medium w-full px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	)
}
