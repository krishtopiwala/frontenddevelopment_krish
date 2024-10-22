// JavaScript Datatypes

// Primitive Datatypes

/*

String
Number
Bigint
Boolean
Symbol
Object
Undefined
Null

*/

// Non-Primitive Datatypes

/*

Arrays
Object

*/

let str1 = 'This is \'single\' quote string';
let str2 = "This is \"double\" quote string";
let str3 = `This is template literal string`;

let word = "Smit";
let str4 = `Hello ${word}`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


var temp = "Hello";
console.log(`This is global ${temp}`);

{
    var temp = "World";
    console.log(`This is scope ${temp}`);
}