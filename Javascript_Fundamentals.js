//1. Data Types and Variables:
//Problem: Declare a variable named greeting and assign the string "Hello, World!" to it. Then, print the variable to the console.

//Solution:

let greeting = "Hello, World!";
console.log(greeting);

//2. Type Coercion:
//Problem: Given a number x, convert it to a string and then append the string " times" to the end. Print the result.

//Solution:

let x = 5;
let result = x.toString() + " times";
console.log(result);  // Outputs: "5 times"

//3. Conditional Statements:
//Problem: Write a program that checks if a given number y is even or odd and prints the result to the console.

//Solution:
let y = 6;

if (y % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
//4. Logical Operators:
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
//5. Switch Statement:
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

//2. Functions with Objects:
//Problem: Write a function that takes an object representing a person and returns their full name.

//Solution:

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

const personObj = {
    firstName: "John",
    lastName: "Doe"
};

console.log(getFullName(personObj));  // Outputs: "John Doe"

//3. Functions, Arrays, and Objects Combined:
//Problem: Given an array of objects, where each object represents a book with a title and author property, write a function that returns the titles of all the books.

//Solution:

function getBookTitles(books) {
    let titles = [];
    for (let book of books) {
        titles.push(book.title);
    }
    return titles;
}

const booksArray = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

console.log(getBookTitles(booksArray));  // Outputs: ["To Kill a Mockingbird", "1984", "The Great Gatsby"]

//4. Modifying Objects inside an Array:
//Problem: Given an array of objects where each object represents a student with a name and grade property, write a function that increases each student's grade by 10%.

//Solution:

function boostGrades(students) {
    for (let student of students) {
        student.grade *= 1.10;
    }
}

const studentsArray = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 90 },
    { name: "Charlie", grade: 78 }
];

boostGrades(studentsArray);
console.log(studentsArray);  // Outputs the modified students array with boosted grades

//Using functions in tandem with arrays and objects is a common pattern in programming. Mastering these foundational topics is crucial before moving on to more advanced JavaScript features and frameworks.

//Advanced Data Structures in JavaScript:
//While JavaScript doesn't have built-in support for advanced data structures like some other languages, many of these can be implemented using JavaScript's basic objects and arrays.

