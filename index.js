const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 1234;

app.use(express.static('FOLDER PATH')); // update with folder path
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => { console.log("Listening on --> ", PORT)});
// app.listen(PORT);