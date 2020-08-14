// Let's build a dang Router
const router = require('express').Router();

// DATABASES
const { Page, User } = require('../models');

// VIEWS
const userList = require('../views/userList');
const pageList = require('../views/userPages');

router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  res.send(userList(users));
});

router.get('/:id', async (req, res, next) => {
  try {
    // TODO Explain how sequelize is packaging these objects
    const pages = await Page.findAll({
      where: { authorId: req.params.id },
      include: 'author',
    });

    const author = pages[0].author;
    console.log(author);

    res.send(pageList(author, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
