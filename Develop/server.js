var express = require("express");
var path = require("path");
var htmlRoutes = require('./routes/htmlRoutes');
var apiRoutes = require('./routes/apiRoutes');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
})