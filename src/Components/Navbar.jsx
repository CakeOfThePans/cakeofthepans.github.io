import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav
			className={`fixed top-0 w-full z-40 ${
				menuOpen ? 'bg-background' : 'bg-background/80'
			} backdrop-blur-xs border-b border-border shadow-md`}
		>
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					<a href="#home" className="text-xl font-semibold text-primary">
						CH.
					</a>
					<div className="hidden md:flex items-center gap-8">
						<a href="#home" className=" hover:text-primary transition-colors">
							Home
						</a>
						<a href="#about" className=" hover:text-primary transition-colors">
							About
						</a>
						<a
							href="#projects"
							className=" hover:text-primary transition-colors"
						>
							Projects
						</a>
						<a href="#skills" className=" hover:text-primary transition-colors">
							Skills
						</a>
						<a
							href="#contact"
							className=" hover:text-primary transition-colors"
						>
							Contact
						</a>
						<ThemeToggle />
					</div>
					<div className="md:hidden flex items-center gap-8">
						<ThemeToggle />
						<div
							className="text-xl cursor-pointer md:hidden hover:text-primary transition-colors"
							onClick={() => setMenuOpen((prev) => !prev)}
						>
							{menuOpen ? '✕' : '☰'} {/* Toggle icon */}
						</div>
					</div>
				</div>
			</div>
			{/* Mobile dropdown */}
			<div
				className={`absolute w-full bg-background border-b border-border shadow-md md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					menuOpen
						? 'max-h-96 opacity-100 translate-y-0 pointer-events-auto'
						: 'max-h-0 opacity-0 -translate-y-8 pointer-events-none'
				}`}
				style={{ zIndex: 39 }}
			>
				<div className="flex flex-col items-center py-4 space-y-4">
					<a
						href="#home"
						className=" hover:text-primary text-lg font-medium transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Home
					</a>
					<a
						href="#about"
						className=" hover:text-primary text-lg font-medium transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						About
					</a>
					<a
						href="#projects"
						className=" hover:text-primary text-lg font-medium transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Projects
					</a>
					<a
						href="#skills"
						className=" hover:text-primary text-lg font-medium transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Skills
					</a>
					<a
						href="#contact"
						className=" hover:text-primary text-lg font-medium transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	)
}
