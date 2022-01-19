//
//
// EcmaScript 6 - released on: 2015
//
//

//default params
const aFunction = (name = "Daniel", age = 26, country = "CL") => {
  console.log(name, age, country);
};

aFunction();

// template literals
const hola = "helo";
const mundo = "World";

let saludo = `${hola} ${mundo}`;
console.log(saludo);

// multiline
let multiline = `con los template literals se puede
tener mas de una linea
como esta que queda debajo`;
console.log(multiline);

// destructuring
let objecto = {
  name: "Daniel",
  age: 26,
  country: "CL",
};

const { age, country } = objecto; // extract values from object properties
console.log(age, country);

// spread
let team1 = ["oscar", "julian", "ricardo"];
let team2 = ["valeria", "yessica", "camila"];

let teamglobal = [...team1, ...team2]; // get element values of team1 and team2
console.log(teamglobal);

// let y const

// object properties enhanced
let name = "Daniel";
let age = 26;
const person = { name, age }; // when property name is the same as variable name

// arrow functions
const names = () => ({ name: "Daniel", age: 26 });
console.log(names());

// promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("this code runs after the first promise"))
  .catch((error) => console.log(error));

// classes
class entity {
  constructor() {
    this.name = "Daniel";
    this.age = 26;
  }
  #privateMethod() {
    console.log("private method");
  }
  publicMethod() {
    console.log("public method can access to: ");
    this.#privateMethod();
  }
}

const me = new entity();
me.publicMethod();

// modules
// same name as module.js
import { sameName } from "./module.js"; // extension is required
console.log(sameName);

// generators
function* loginFailed() {
  yield "you have 2 more attempts";
  yield "second fail, next you will be blocked";
  yield "third try failed, you are not allowed to login";
}

const fail = loginFailed();
console.log(fail.next().value);
console.log(fail.next().value);
console.log(fail.next().value);
if (!fail.next().value) {
  console.log("block user entry");
}
