const input = require('readline-sync'); //access readline functions

let answer = input.question('Enter a word: '); //ensures answer is a string
let index = input.questionInt('Enter an index: '); //ensures index is a number

let character = answer[index]; // finds the character at the specified index
console.log('The character at index ' + index + ' is: ' + character); // displays the character at the specified index