const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//mongodb
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://now4934:<password>@cluster0.rshvml4.mongodb.net/?retryWrites=true&w=majority",
  { useUnfiedTopology: true },
  function (error, client) {
    if (error) return console.log(error);
    db = client.db("todoapp");

    db.collection("post"),
      insertOne({ 이름: "kingchan", _id: 100 }, function (error, result) {
        console.log("저장완료");
      });

    app.listen(5555, function () {
      console.log("i am the king!");
    });
  }
);

MongoClient.connect(
  "mongodb+srv://now4934:now4934@cluster0.rshvml4.mongodb.net/?retryWrites=true&w=majority",
  function (error, client) {
    if (error) return console.log("에러남");

    app.listen(5555, function () {
      console.log("i am the king!");
    });
  }
);

app.get("/pet", function (request, answer) {
  answer.send("펫 용품점입니다.");
});

app.get("/beauty", function (request, answer) {
  answer.send("뷰티용품 사세요! ^'-'^");
});

app.get("/", function (request, answer) {
  answer.sendFile(__dirname + "/index.html");
});

app.get("/write", function (request, answer) {
  answer.sendFile(__dirname + "/write.html");
});

app.post("/add", function (request, answer) {
  answer.send("전송완료입니다~");
  db.collection("post").insertOne(
    { 제목: request.body.title, 날짜: request.body.date },
    function () {
      console.log("저장완료");
    }
  );
});
