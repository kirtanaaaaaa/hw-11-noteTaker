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

var notes = JSON.parse(fs.readFileSync("/db/db.json"));


app.get("/api/notes", function(req, res){
   // res.sendFile(path.join(__dirname, "/db/db.json"))
   return res.json(notes);
})

app.post("/api/notes", function(req, res){
   
})

app.delete("/api/notes/:id", function(req, res){
    var chosen = req.params.id;
    console.log(chosen);

    var newNote = [];
    var deleted = false;
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].title) {
        deleted = true;
      }else{
          newNote.push(notes[i])
      }
    }
  
})

app.listen(PORT,function(){
        console.log("App listening on PORT " + PORT);
})
