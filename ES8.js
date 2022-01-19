/* 

EcmaScript 8 - released on: 2017

*/

// object entries
const data = {
  frontend: "Daniel",
  backend: "Julian",
  design: "Ricardo",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object values
const data = {
  frontend: "Daniel",
  backend: "Julian",
  design: "Ricardo",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

// padding
const string = "hello";
console.log(string.padStart(8, "hi ")); // add hi to the beginning of the string
console.log(string.padEnd(12, " bye")); // add bye to the end of the string

// trailing commas
const test = {
  name: "Daniel", // trailing comma is optional
};

// async-await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hello World");
    }
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
