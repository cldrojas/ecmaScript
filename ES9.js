/* 

EcmaScript 9 - released on: 2018

*/

//spread operator
const me = {
  name: "Daniel",
  age: 27,
  email: "cld.rojasz@gmail.com",
  country: "CL",
};

let { email, ...all } = me; // rest operator
console.log(all);

let newMe = { ...me, hoby: "coding" };
console.log(newMe);

// finnaly
const hello = () =>
  new Promise((resolve, reject) => {
    resolve("hello");
  });

hello()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-04-20");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
