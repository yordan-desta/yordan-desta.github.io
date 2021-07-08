/**
 * 2. Write a Node.js program that uses readline to keep on asking the user for a number until they enter “stop”. 
 * The program should then output the sum of all the numbers that the user has entered.
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function getNumner() {
    readline.question("type in a number or 'stop': ", num => {
        if (num === 'stop') {
            console.log(numbers.reduce((a1, a2) => a1 + a2));
            readline.close();
        } else {
            numbers.push(Number(num));
            getNumner();
        }
    });
}

getNumner();