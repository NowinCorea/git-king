// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["heart", "spade"]);
console.log(json);

const queen = {
  name: "queen",
  color: "black",
  size: null,
  birthData: new Date(),
  move: () => {
    console.log(`${name} move free!`);
  },
};

json = JSON.stringify(queen);
console.log(json);

json = JSON.stringify(queen, ["name", "color"]);
console.log(json);

json = JSON.stringify(queen, (key, value) => {
  console.log(`key:${key}, value: ${value}`);
  return key === "name" ? "king is me!" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

console.clear();
juson = JSON.stringify(queen);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value: ${value}`);
  return key === "birthDate" ? newDate(value) : value;
});
console.log(obj);
queen.move();
// obj.move();

console.log(queen.birthData.getDate());

// 유용한 사이트
// JSON Diff
// JSON Beautifier
// JSON Parser
// -번역기
// JSON Validator
