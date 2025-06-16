import Navbar from "./Components/Navbar"
import About from "./Components/Sections/About"
import Home from "./Components/Sections/Home"
import Projects from "./Components/Sections/Projects"
import Skills from "./Components/Sections/Skills"
import Contact from "./Components/Sections/Contact"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ToastContainer position="bottom-right" hideProgressBar/>
    </div>
  )
}
// TODO: Add padding instead of setting height to 100vh
export default App
