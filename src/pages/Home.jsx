import AboutSection from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectSection from "../components/ProjectSection"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <main>
        <HeroSection/>
      {/* About Section */}
      <AboutSection/>
      {/* Skills Section */}
      <SkillsSection/>
      {/* Project Section */}
      <ProjectSection/>
      {/* contact  section */}
      <ContactSection/>
      </main>
     {/* footer */}
     <Footer/>
    </div>
  )
}

export default Home
