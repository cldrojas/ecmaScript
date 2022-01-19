/* 

EcmaScript 10 - released on: 2019

*/

// array flat
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flat(2));

// array flatMap
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flatMap((value) => [value, value * 2]));

// trimStart
let string = "   hello world   ";
console.log(string);
console.log(string.trimStart());

// trimEnd
let string = "   hello world   ";
console.log(string);
console.log(string.trimEnd());

// optional catch binding
try {
  // code
} catch {
  console.error(error);
}

// fromEntries
let entries = [
  ["name", "Daniel"],
  ["age", 27],
];
console.log(Object.fromEntries(entries));

// symbol object
let symbol = Symbol("name");
console.log(symbol.description);
