# Portfolio Admin Dashboard

A Node.js Express application with MongoDB for managing portfolio projects and skills. Features a complete admin interface with CRUD operations and JSON API endpoints.

## Features

- **Admin Dashboard**: Complete admin interface for managing content
- **Projects Management**: Add, edit, delete, and view portfolio projects
- **Skills Management**: Organize technical skills by categories and proficiency levels
- **JSON API**: RESTful API endpoints for accessing data
- **Responsive Design**: Mobile-friendly Bootstrap-based interface
- **MongoDB Integration**: Cloud-based data storage with MongoDB Atlas

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Template Engine**: Pug
- **Frontend**: Bootstrap 5, Custom CSS/JS
- **Deployment**: [Your deployment platform]

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd portfolio-admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio_db
     PORT=3000
     ```

4. **MongoDB Atlas Setup**
   - Create account at [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster (free tier)
   - Set up database user credentials
   - Add `0.0.0.0/0` to Network Access (allow access from anywhere)
   - Copy connection string to `.env` file

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Usage

### Admin Interface
- **Dashboard**: `http://localhost:3000/`
- **Projects**: `http://localhost:3000/projects`
- **Skills**: `http://localhost:3000/skills`

### API Endpoints
- **GET /api/projects** - Get all projects
- **GET /api/skills** - Get all skills
- **GET /api/projects/featured** - Get featured projects only
- **GET /api/skills/:category** - Get skills by category

### Example API Response
```json
{
  "_id": "...",
  "title": "E-commerce Website",
  "description": "Full-stack e-commerce application",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://project-demo.com",
  "featured": true,
  "createdAt": "2025-01-15T10:30:00.000Z"
}
```

## Project Structure

```
portfolio-admin/
├── config/
│   └── database.js          # MongoDB connection
├── models/
│   ├── Project.js           # Project schema
│   └── Skill.js            # Skill schema
├── routes/
│   ├── projects.js         # Project routes
│   ├── skills.js           # Skill routes
│   └── api.js              # API endpoints
├── views/
│   ├── layout.pug          # Base template
│   ├── index.pug           # Dashboard
│   ├── error.pug           # Error page
│   ├── projects/           # Project templates
│   └── skills/             # Skill templates
├── public/
│   ├── css/style.css       # Custom styles
│   └── js/main.js          # Client-side JS
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── index.js               # Main application file
├── package.json           # Dependencies
└── README.md              # This file
```

## Data Models

### Project Schema
- title (String, required)
- description (String, required)
- technologies (Array of Strings, required)
- githubUrl (String, optional)
- liveUrl (String, optional)
- image (String, optional)
- featured (Boolean, default: false)
- createdAt (Date, auto-generated)

### Skill Schema
- name (String, required)
- category (String, required - Frontend/Backend/Database/Tools/Languages/Frameworks)
- proficiency (String, required - Beginner/Intermediate/Advanced/Expert)
- icon (String, optional)
- description (String, optional)
- createdAt (Date, auto-generated)

## Deployment

### Heroku Deployment
1. Create Heroku app: `heroku create your-app-name`
2. Set environment variables: `heroku config:set MONGODB_URI=your_connection_string`
3. Deploy: `git push heroku main`

### Render Deployment
1. Connect GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically on git push

### Railway Deployment
1. Connect GitHub repository to Railway
2. Add environment variables
3. Deploy with one click

## Live Demo

**Admin Dashboard**: [Your deployed URL here]
**API Endpoint**: [Your deployed URL]/api/projects

## Assignment Requirements Checklist

- ✅ MongoDB collections (Projects & Skills)
- ✅ Express app with admin pages
- ✅ Template engine (Pug) for server-side rendering
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ MongoDB Atlas online database
- ✅ Realistic content in collections
- ✅ Styled admin pages (responsive design)
- ✅ JSON API endpoints
- ✅ Deployed online

## Contributing

This is an individual assignment project. For educational purposes only.

## License

This project is created for educational purposes as part of HTTP5222 course assignment.
