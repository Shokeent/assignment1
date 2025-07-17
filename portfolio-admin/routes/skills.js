const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Display all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.render('skills/index', { skills, title: 'Skills' });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Show form to add new skill
router.get('/new', (req, res) => {
  res.render('skills/new', { title: 'Add New Skill' });
});

// Create new skill
router.post('/', async (req, res) => {
  try {
    const skill = new Skill({
      name: req.body.name,
      category: req.body.category,
      proficiency: req.body.proficiency,
      icon: req.body.icon || '',
      description: req.body.description || ''
    });
    
    await skill.save();
    res.redirect('/skills');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Show form to edit skill
router.get('/edit/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.render('error', { error: 'Skill not found' });
    }
    res.render('skills/edit', { skill, title: 'Edit Skill' });
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Update skill
router.post('/edit/:id', async (req, res) => {
  try {
    await Skill.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      category: req.body.category,
      proficiency: req.body.proficiency,
      icon: req.body.icon || '',
      description: req.body.description || ''
    });
    res.redirect('/skills');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

// Delete skill
router.post('/delete/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect('/skills');
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = router;