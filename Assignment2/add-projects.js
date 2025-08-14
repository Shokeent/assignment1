// Script to add projects to the backend database
// Run this with: node add-projects.js

const projects = [
  {
    title: 'IXD Ontario Parks',
    description: 'A comprehensive camping and park reservation website designed for first-time campers and newcomers to Ontario. Features interactive maps, booking system, gear planning, and multilingual support.',
    technologies: 'HTML5,CSS3,JavaScript,API Integration,Responsive Design',
    githubUrl: 'https://github.com/Shokeent/IXD-Ontario-Parks.git',
    liveUrl: ''
  },
  {
    title: 'Useless Pet',
    description: 'An interactive web application featuring random dog breeds with calm and angry states. Users can pet the dogs and receive humorous responses.',
    technologies: 'JavaScript,CSS3,HTML5,Dog.ceo API,Responsive Design',
    githubUrl: 'https://github.com/Shokeent/Useless-pet.git',
    liveUrl: ''
  },
  {
    title: 'Well Nest - Mental Health App',
    description: 'A React Native mobile application connecting users with mental health therapists. Features include appointment booking, therapist discovery, favorites, and location mapping.',
    technologies: 'React Native,Firebase,Expo,JavaScript,Google Maps API',
    githubUrl: 'https://github.com/Shokeent/Well-Nest---WIP-Project.git',
    liveUrl: ''
  }
];

const skills = [
  { name: 'JavaScript', level: 'Advanced', category: 'Programming Languages' },
  { name: 'React', level: 'Advanced', category: 'Frontend Frameworks' },
  { name: 'React Native', level: 'Intermediate', category: 'Mobile Development' },
  { name: 'HTML5', level: 'Advanced', category: 'Web Technologies' },
  { name: 'CSS3', level: 'Advanced', category: 'Web Technologies' },
  { name: 'Node.js', level: 'Intermediate', category: 'Backend Technologies' },
  { name: 'Express.js', level: 'Intermediate', category: 'Backend Frameworks' },
  { name: 'MongoDB', level: 'Intermediate', category: 'Databases' },
  { name: 'Firebase', level: 'Intermediate', category: 'Backend Technologies' },
  { name: 'REST API', level: 'Intermediate', category: 'API Development' },
  { name: 'Responsive Design', level: 'Advanced', category: 'Frontend Design' },
  { name: 'Expo', level: 'Intermediate', category: 'Mobile Development' },
  { name: 'Google Maps API', level: 'Beginner', category: 'API Integration' },
  { name: 'Pug', level: 'Beginner', category: 'Template Engines' }
];

async function addData() {
  try {
    // Add projects
    for (const project of projects) {
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      });
      
      if (response.ok) {
        console.log(`✓ Added project: ${project.title}`);
      } else {
        console.log(`✗ Failed to add project: ${project.title}`);
      }
    }

    // Add skills
    for (const skill of skills) {
      const response = await fetch('http://localhost:3000/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(skill)
      });
      
      if (response.ok) {
        console.log(`✓ Added skill: ${skill.name}`);
      } else {
        console.log(`✗ Failed to add skill: ${skill.name}`);
      }
    }

    console.log('\n🎉 All data added successfully!');
    console.log('🔄 Refresh your portfolio to see the changes');
    
  } catch (error) {
    console.error('Error adding data:', error);
  }
}

addData();
