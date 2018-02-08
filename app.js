var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./app/routes/routes.js")(app);

var server = app.listen(5000, function () {
    console.log("Listening on port %s...", server.address().port);
});