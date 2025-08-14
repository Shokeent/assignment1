import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const Projects = ({ projects }) => {
  // Fallback data in case API is not available
  const fallbackProjects = [
    {
      _id: '1',
      title: 'IXD Ontario Parks',
      description: 'A comprehensive camping and park reservation website designed for first-time campers and newcomers to Ontario. Features interactive maps, booking system, gear planning, and multilingual support.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
      liveUrl: '',
      githubUrl: 'https://github.com/Shokeent/IXD-Ontario-Parks.git'
    },
    {
      _id: '2',
      title: 'Useless Pet',
      description: 'An interactive web application featuring random dog breeds with calm and angry states. Users can pet the dogs and receive humorous responses.',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Dog.ceo API', 'Responsive Design'],
      liveUrl: '',
      githubUrl: 'https://github.com/Shokeent/Useless-pet.git'
    },
    {
      _id: '3',
      title: 'Well Nest - Mental Health App',
      description: 'A React Native mobile application connecting users with mental health therapists. Features include appointment booking, therapist discovery, favorites, and location mapping.',
      technologies: ['React Native', 'Firebase', 'Expo', 'JavaScript', 'Google Maps API'],
      liveUrl: '',
      githubUrl: 'https://github.com/Shokeent/Well-Nest---WIP-Project.git'
    },
    {
      _id: '4',
      title: 'Portfolio Admin Dashboard',
      description: 'Full-stack admin dashboard built with Express.js and MongoDB for managing portfolio content with API endpoints.',
      technologies: ['Express.js', 'MongoDB', 'Node.js', 'Pug', 'REST API'],
      liveUrl: 'http://localhost:3000',
      githubUrl: '#'
    }
  ]

  const projectsToShow = projects.length > 0 ? projects : fallbackProjects

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on recently</p>
        </div>
        
        <div className="projects-grid">
          {projectsToShow.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-content">
                <h3>{project.title || project.name}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {(project.technologies || []).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={18} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
