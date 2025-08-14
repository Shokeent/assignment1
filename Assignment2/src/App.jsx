import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Use proxy path - Vite will proxy /api requests to localhost:3000
      const API_BASE = '/api'
      
      console.log('Fetching data from API...')
      
      const [projectsRes, skillsRes] = await Promise.all([
        fetch(`${API_BASE}/projects`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }),
        fetch(`${API_BASE}/skills`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ])
      
      if (!projectsRes.ok) {
        throw new Error(`Projects API error: ${projectsRes.status}`)
      }
      
      if (!skillsRes.ok) {
        throw new Error(`Skills API error: ${skillsRes.status}`)
      }
      
      const projectsData = await projectsRes.json()
      const skillsData = await skillsRes.json()
      
      console.log('Projects data:', projectsData)
      console.log('Skills data:', skillsData)
      
      setProjects(projectsData)
      setSkills(skillsData)
    } catch (error) {
      console.error('Error fetching data:', error)
      // The components will use fallback data
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading portfolio...</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
