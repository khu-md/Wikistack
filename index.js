// Set up our express app
const express = require('express');
const app = express();
const PORT = 1234;

// Require some middleware
const morgan = require('morgan');
const path = require('path');

// Require some views
const main = require('./views/main');

// Require database
const { db } = require('./models');

// MIDDLEWARE
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', (req, res) => {
  res.send(main());
});

// DATABASE
db.authenticate().then(() => {
  console.log('Connected to the database');
});

( async () => {
  try {
    await db.sync();
    console.log("Database tables created!");
    app.listen(PORT, () => {
      console.log('Listening on --> ', PORT);
    });
  } catch (error) {
    console.log("Something went wrong -->", error.message);
  }
})();

// LISTEN

// (async () => {
//   try
//   await db.sync();
//   console.log()
// })();

