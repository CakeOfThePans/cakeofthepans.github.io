import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if(storedTheme === "dark"){
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    else{
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false)
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
    else{
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }

  }

  return (
    <button onClick={toggleTheme} className="w-14 h-8 bg-toggle rounded-full p-1 flex items-center">
      <div
        className={`w-6 h-6 p-1 bg-background rounded-full flex items-center justify-center transform transition-transform duration-300
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {isDarkMode ? <Moon className="" /> : <Sun className="text-yellow-400" />}
      </div>
    </button>
  )
}
