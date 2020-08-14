// Let's build a dang Router
const router = require('express').Router();

// DATABASES
const { Page, User } = require('../models');

// VIEWS
const addPage = require('../views/addPage');
const wikiPage = require('../views/wikipage');
const main = require('../views/main');

router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
  res.send('retrieve all wiki pages');
});

router.post('/', async (req, res, next) => {
  try {

    let [author, created] = await User.findOrCreate({ 
      where: { name: req.body.author, email: req.body.email }
    }); // returns {instance - Model, created - a boolean}

    // APPROACH 1: This is one way to find or create.
    // But sequelize already has a way to do this!
    // let author = await User.findOne({
    //   where: { name: req.body.author, email: req.body.email },
    // });

    // if (author === null) {
    //   author = await User.create({
    //     name: req.body.author,
    //     email: req.body.email
    //   })
    // }

    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });

    console.log(author);

    // A setter method created by sequelize
    // Upon calling, will assign the appropriate AuthorId to
    // our page.
    await page.setAuthor(author);

    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  const sentSlug = req.params.slug;
  const page = await Page.findOne({ where: { slug: sentSlug } });
  const author = await page.getAuthor();
  res.send(wikiPage(page, author));
});

module.exports = router;
