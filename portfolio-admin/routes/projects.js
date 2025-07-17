const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Display all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.render('projects/index', { projects, title: 'Projects' });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Show form to add new project
router.get('/new', (req, res) => {
  res.render('projects/new', { title: 'Add New Project' });
});

// Create new project
router.post('/', async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies.split(',').map(tech => tech.trim()),
      githubUrl: req.body.githubUrl || '',
      liveUrl: req.body.liveUrl || '',
      image: req.body.image || '',
      featured: req.body.featured === 'on'
    });
    
    await project.save();
    res.redirect('/projects');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Show form to edit project
router.get('/edit/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.render('error', { error: 'Project not found' });
    }
    res.render('projects/edit', { project, title: 'Edit Project' });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Update project
router.post('/edit/:id', async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies.split(',').map(tech => tech.trim()),
      githubUrl: req.body.githubUrl || '',
      liveUrl: req.body.liveUrl || '',
      image: req.body.image || '',
      featured: req.body.featured === 'on'
    });
    res.redirect('/projects');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Delete project
router.post('/delete/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/projects');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = router;