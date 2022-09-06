const express = require("express");
const app = express();

app.listen(5555, function () {
  console.log("i am the king!");
});

app.get("/pet", function (요청, 응답) {
  응답.send("펫 용품점입니다.");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/pet", function (요청, 응답) {
  응답.send("펫 용품점입니다.");
});