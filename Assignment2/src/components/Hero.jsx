import { ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Tarun Shokeen</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful, responsive web applications using modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                    className="btn btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <button onClick={scrollToProjects} className="scroll-indicator">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

export default Hero
