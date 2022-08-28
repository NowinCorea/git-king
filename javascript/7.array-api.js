// Q1. make a string out of an array
{
  const chess = ["king", "queen", "look", "bishop"];
  const result = chess.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const chess = "king, queen, look, bishop";
  //split은 구분자가 꼭 필요함
  const result = chess.split(",");
  console.log(result);
}

// Q3. make this array look like reverse
{
  const chess = ["king", "queen", "look", "bishop"];
  // reverse chess(배열자체)를 바꿈.
  const result = chess.reverse();
  console.log(result);
  console.log(chess);
}

// Q5. make new array without the first two elements
{
  const chess = ["king", "queen", "look", "bishop", "knight"];
  const result = chess.slice(2, 5);
  console.log(result);
  console.log(chess);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
console.clear();
const students = [
  new Student("king", 29, true, 10),
  new Student("queen", 30, false, 9),
  new Student("look", 31, true, 5),
  new Student("knight", 32, false, 3),
  new Student("bishop", 33, true, 3),
];

// Q5. find a student with the score 3
{
  const result = students.find((student) => student.score === 3);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 5
{
  console.clear();
  const result = students.some((student) => student.score < 5);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  //   const result = students.reduce((prev, curr) => {
  //     console.log("--------");
  //     console.log(prev);
  //     console.log(curr);
  //     return prev + curr.score;
  //   }, 0);
  //   console.log(result);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '10,9,5,3,3'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 2)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '3,3,5,9,10'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
