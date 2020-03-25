// const express = require("express");
// babel을 install 하여서 위의 주석처리된 문장을 밑의 문장으로 바꾸었다. 이렇게 함으로써 package.json의 start에서 node index.js라는 문장 역시 babel-node index.js라는 문장으로 수정하였다.
// 이렇게 함으로써 최신 js코드(지금도 최신인가?)로 수정하였다.
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

/* const handleListening = function(){
    console.log(`Listening on: http://localhost:${PORT}`);
} const handleHome = function(req, res) {
  res.send("Hello from home");
};
 const handleProfile = function(req,res){
    res.send("You are on my profile");
} */
// 위의 함수들을 arrow_function 방식으로 수정하였다. 둘다 같은 의미인데 다른 방식을 사용한 것 뿐이다. js의 arrow_function 방식이다.
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send("You are on my profile");

// .....이부분에 원하는 middleware를 추가하고 그 다음에 route를 추가한다. 순서는 매우 중요하다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

/* const middleware = (req,res,next) => {
  res.send("not happening");
} */

app.get("/", handleHome);
// app.get("/", betweenHome, handleHome);
// 위처럼 전역적으로 middleware를 둘 수 있는 방법도 있다.

// app.get("/", middleware, handleHome);
// 위와 같은 경우에는 route전에 연결이 끊긴다. 연결이 일어나질 못하는 것이다. 이처럼 middleware는 연결을 끊을 수가 있다. 만약 그것이 res.send를 실행하는 함수를 발동한다면 말이다. next대신

// 만약 이부분에(profile의 바로전단계) middleware를 추가하면 그것은 profile에 가기전에만 실행될 것이다. 위의 /부분에서는 실행되지 않는다는 의미이다.

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);