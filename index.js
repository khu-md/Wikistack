// Set up our express app
const express = require('express');
const app = express();
const PORT = 1234;

// Require some middleware and routes
const morgan = require('morgan');
const path = require('path');
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/users');

// Require some views
const main = require('./views/main');

// Require database
const { db } = require('./models');

// MIDDLEWARE
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// ROUTES
// New page routes
app.use('/wiki', wikiRoutes);
app.use('/users', userRoutes);
// Main page
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

// DATABASE
db.authenticate().then(() => {
  console.log('-- Connected to the database --');
});

// below we use an immediately invoked function expression
// IIFE : <https://developer.mozilla.org/en-US/docs/Glossary/IIFE>

// This is a pattern that was more commonly seen prior to the introduction of const and let (local scoping)
// <http://gregfranko.com/blog/i-love-my-iife/>

(async () => {
  try {
    await db.sync({ force: false });
    console.log('-- Database tables created! --');
    app.listen(PORT, () => {
      console.log('Listening on --> ', PORT);
    });
  } catch (error) {
    console.log('Something went wrong -->', error.message);
  }
})();
