const router = require('express').Router();

// VIEWS
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
  res.send('retrieve all wiki pages');
});
router.post('/', (req, res, next) => {
  res.send('submit a new page to database');
});
router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
