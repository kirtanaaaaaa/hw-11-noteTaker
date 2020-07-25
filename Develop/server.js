var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.get("/notes", function(req, res){
    
})

app.post("/notes", function(req, res){
   
})

app.delete("/notes/:id", function(req, res){
   
})

app.listen(PORT,function(){
        console.log("App listening on PORT " + PORT);
})
