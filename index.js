const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
/* app.get("/", function(req, res) {
  res.send("hello world");
}); */

const PORT = 4000;
/* const handleListening = () =>{

} */

const handleListening = function(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = function(req,res){
    console.log(req);
    res.send('Hello from home');
}

const handleProfile = function(req,res){
    res.send("You are on my profile");
}

app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);