/* 

EcmaScript 12 - released on: 2021

*/

// replace all
const text =
  "javaScript is a scripting language, with javaScript being the most popular";
const replaced = text.replace("javaScript", "Python");
console.log(replaced); // replace first match

const replacedAll = text.replaceAll("javaScript", "Python");
console.log(replacedAll); // replace all matches

// private methods

// promise any
const promise1 = new Promise((resolve, reject) => reject("one"));
const promise2 = new Promise((resolve, reject) => resolve("two"));
const promise3 = new Promise((resolve, reject) => resolve("three"));

Promise.any([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});

// weakRef
class aClass {
  constructor(element) {
    this.name = "Daniel";
    this.age = 26;
    this.ref = new WeakRef(element);
  }
}

// logic operators
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));

let isTrue = true;
let isFalse = false;
console.log((isTrue ||= isFalse));

let isTrue = undefined;
let isFalse = false;
console.log((isTrue ??= isFalse));
