// Let's build a dang Router
const router = require('express').Router();

// DATABASES
const { Page } = require('../models');

// VIEWS
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
  res.send('retrieve all wiki pages');
});

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    });

    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
