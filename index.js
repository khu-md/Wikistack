// Set up our express app
const express = require('express');
const app = express();
const PORT = 1234;

// Require some middleware
const morgan = require('morgan');

// Require some views
const main = require('./views/main');

// MIDDLEWARE
app.use(express.static('FOLDER PATH')); // update with folder path
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', (req, res) => {
  res.send(main());
});

// LISTEN
app.listen(PORT, () => { console.log("Listening on --> ", PORT)});
// app.listen(PORT);