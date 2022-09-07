const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5555, function () {
  console.log("i am the king!");
});

app.get("/pet", function (요청, 응답) {
  응답.send("펫 용품점입니다.");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/write", function (요청, 응답) {
  응답.sendFile(__dirname + "/write.html");
});

app.post("/add", function (요청, 응답) {
  응답.send("전송완료");
  console.log(요청.body.title);
  console.log(요청.body.sub);
});
