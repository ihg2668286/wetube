// const express = require("express");
// babel을 install 하여서 위의 주석처리된 문장을 밑의 문장으로 바꾸었다. 이렇게 함으로써 package.json의 start에서 node index.js라는 문장 역시 babel-node index.js라는 문장으로 수정하였다.
// 이렇게 함으로써 최신 js코드(지금도 최신인가?)로 수정하였다.
import express from "express";
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

/* const handleProfile = function(req,res){
    res.send("You are on my profile");
} */
// 위의 함수를 밑의 한줄로 수정하였다. 둘다 같은 의미인데 다른 방식을 사용한 것 뿐이다.
const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);