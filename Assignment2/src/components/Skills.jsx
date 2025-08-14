import './Skills.css'

const Skills = ({ skills }) => {
  // Fallback data based on actual projects
  const fallbackSkills = [
    {
      _id: '1',
      name: 'JavaScript',
      level: 'Advanced',
      category: 'Programming Languages'
    },
    {
      _id: '2',
      name: 'React',
      level: 'Advanced',
      category: 'Frontend Frameworks'
    },
    {
      _id: '3',
      name: 'React Native',
      level: 'Intermediate',
      category: 'Mobile Development'
    },
    {
      _id: '4',
      name: 'Node.js',
      level: 'Intermediate',
      category: 'Backend Technologies'
    },
    {
      _id: '5',
      name: 'Express.js',
      level: 'Intermediate',
      category: 'Backend Frameworks'
    },
    {
      _id: '6',
      name: 'MongoDB',
      level: 'Intermediate',
      category: 'Databases'
    },
    {
      _id: '7',
      name: 'Firebase',
      level: 'Intermediate',
      category: 'Backend Technologies'
    },
    {
      _id: '8',
      name: 'HTML5',
      level: 'Advanced',
      category: 'Web Technologies'
    },
    {
      _id: '9',
      name: 'CSS3',
      level: 'Advanced',
      category: 'Web Technologies'
    },
    {
      _id: '10',
      name: 'Expo',
      level: 'Intermediate',
      category: 'Mobile Development'
    },
    {
      _id: '11',
      name: 'REST API',
      level: 'Intermediate',
      category: 'API Development'
    },
    {
      _id: '12',
      name: 'Google Maps API',
      level: 'Beginner',
      category: 'API Integration'
    },
    {
      _id: '13',
      name: 'Responsive Design',
      level: 'Advanced',
      category: 'Frontend Design'
    },
    {
      _id: '14',
      name: 'Pug',
      level: 'Beginner',
      category: 'Template Engines'
    },
    {
      _id: '15',
      name: 'Git',
      level: 'Intermediate',
      category: 'Tools'
    }
  ]

  const skillsToShow = skills.length > 0 ? skills : fallbackSkills

  // Group skills by category
  const groupedSkills = skillsToShow.reduce((acc, skill) => {
    const category = skill.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {})

  const getLevelClass = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return 'level-beginner'
      case 'intermediate':
        return 'level-intermediate'
      case 'advanced':
        return 'level-advanced'
      default:
        return 'level-intermediate'
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with and my proficiency levels</p>
        </div>

        <div className="skills-categories">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill._id} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${getLevelClass(skill.level)}`}>
                        {skill.level || 'Intermediate'}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${getLevelClass(skill.level)}`}
                        style={{
                          width: skill.level?.toLowerCase() === 'beginner' ? '40%' :
                                skill.level?.toLowerCase() === 'intermediate' ? '70%' : '90%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
