const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
require('dotenv').config();

// Import routes
const projectsRouter = require('./routes/projects');
const skillsRouter = require('./routes/skills');
const apiRouter = require('./routes/api');

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Dashboard' });
});

app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);
app.use('/api', apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { 
    error: 'Page not found',
    title: 'Error 404'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    error: 'Something went wrong on the server',
    title: 'Error 500'
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🔗 API Projects: http://localhost:${PORT}/api/projects`);
  console.log(`🔗 API Skills: http://localhost:${PORT}/api/skills`);
});