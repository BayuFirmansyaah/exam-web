const express = require('express');
const bodyParser = require("body-parser")
const expressLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./routes');
const port = 3000;


// express setting
app.set("view engine","ejs");
app.use(expressLayouts)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


// use routes
routes(app);



// run server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
