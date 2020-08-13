const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.static("FOLDER PATH")) // update with folder path
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
