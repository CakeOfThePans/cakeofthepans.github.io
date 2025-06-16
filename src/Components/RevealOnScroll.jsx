import { useEffect, useRef, useState } from 'react'

export default function RevealOnScroll({ children }) {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const scrollObserver = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true)
				scrollObserver.unobserve(entry.target)
			}
		})

		scrollObserver.observe(ref.current)

		return () => scrollObserver.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={`transition-[opacity,translate] duration-600 ease-in-out
        ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
				}`}
		>
			{children}
		</div>
	)
}
