const express = require('express');
const bodyParser = require("body-parser")
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;


// using ejs
app.set("view engine","ejs");
app.use(expressLayouts)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

