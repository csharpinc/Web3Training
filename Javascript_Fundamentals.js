

//1. Type Coercion:
//Problem: Given a number x, convert it to a string and then append the string " times" to the end. Print the result.

//Solution:

let x = 5;
let result = x.toString() + " times";
console.log(result);  // Outputs: "5 times"

//2. Conditional Statements:
//Problem: Write a program that checks if a given number y is even or odd and prints the result to the console.

//Solution:
let y = 6;

if (y % 2 === 0) {
    console.log("The num is even.");
} else {
    console.log("The num is odd.");
}
//3. Logical Operators:
//Problem: Given two boolean variables a and b, print "Both are true" if both are true, "Both are false" if both are false, and "Mixed values" otherwise.

//Solution:

let a = true;
let b = false;

if (a && b) {
    console.log("Both are true");
} else if (!a && !b) {
    console.log("Both are false");
} else {
    console.log("Mixed values");
}
//4. Switch Statement:
//Problem: Given a variable fruit, if it's "apple", print "Red", if it's "banana", print "Yellow", and if it's "grape", print "Purple". For any other fruit, print "Unknown color".

//Solution:

let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("Red");
        break;
    case "banana":
        console.log("Yellow");
        break;
    case "grape":
        console.log("Purple");
        break;
    default:
        console.log("Unknown color");
}


//Problem: Print numbers from 1 to 5 using a for loop.

//Solution:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
While Loop:

//Problem: Using a while loop, print numbers from 5 down to 1.

//Solution:

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
For...of Loop:

//Problem: Print each element of an array of fruits.

//Solution:

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
//2. Functions:
//Basic Function:

//Problem: Write a function that returns the sum of two numbers.

//Solution:
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));  // Outputs: 8
//Arrow Function:

//Problem: Write an arrow function that returns the product of two numbers.

//Solution:

const product = (a, b) => a * b;
console.log(product(5, 3));  // Outputs: 15
//Function Using Loop:

//Problem: Write a function that takes a number n as an argument and prints all even numbers from 1 to n.

//Solution:

function printEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers(10);  // Outputs: 2, 4, 6, 8, 10


//1. Functions with Arrays:
//Problem: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers.

//Solution:

function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // Outputs: 15



