/* 

EcmaScript 11 - released on: 2020

*/

// dynamic import
const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

// bigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise all settled
const promise1 = new Promise((resolve, reject) => reject("error"));
const promise1 = new Promise((resolve, reject) => resolve("resolved"));
const promise1 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});

// globalThis
console.log(globalThis);

// null operator
const a = null ?? "default";
const b = "notNull" ?? "default";
console.log(a, b);

// optional chaining
const user = {};
console.log(user?.name?.first);

if (user?.name) {
  console.log("user has a name");
} else {
  console.log("user has no name");
}
