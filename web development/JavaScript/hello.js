console.log("Hello, World");

let book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // The property "topic" has value "JavaScript."
    edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.
// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = { preface: "mmfoff", users: "begginers" }; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020):
console.log(book.contents?.users) // => undefined: book.contents has no ch01 property.s


// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [and].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length - 1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11;
console.log(primes)
let empty = []; // [] is an empty array with no elements.
empty.length // => 0

// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements.
    { x: 0, y: 0 }, // Each element is an object.
    { x: 1, y: 1 }
];
let data = { // An object with 2 properties
    trial1: [[1, 2], [3, 4]], // The value of each property is an array.
    trial2: [[2, 3], [4, 5]] // The elements of the arrays are arrays.
};


// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) { // Define a function named "plus1" with parameter "x"
    return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
let square = function (x) { // Functions are values and can be assigned to vars
    return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.


const square2 = x => x * x; // The input x maps to the output x * x


// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:
let a = []; // Create an empty array
a.push(1, 2, 3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements
// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.
points.dist = function () { // Define a method to compute distance between points
    let p1 = this[0]; // First element of array we're invoked on
    let p2 = this[1]; // Second element of the "this" object
    let a = p2.x - p1.x; // Difference in x coordinates
    let b = p2.y - p1.y; // Difference in y coordinates
    return Math.sqrt(a * a + // The Pythagorean theorem 
        b * b); // Math.sqrt() computes the square root
};
console.log(points.dist()) // => Math.sqrt(2): distance between our 2 points


// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) { // A function to compute the absolute value.
    if (x >= 0) { // The if statement...
        return x; // executes this code if the comparison is true.
    } // This is the end of the if clause.
    else { // The optional else clause executes its code if
        return -x; // the comparison is false.
    }
}

console.log(abs(-10) === abs(10))


function sum(array) { // Compute the sum of the elements of an array
    let sum = 0; // Start with an initial sum of 0.
    for (let x of array) { // Loop over array, assigning each element to x.
        sum += x; // Add the element value to the sum.
    } // This is the end of the loop.
    return sum; // Return the sum.
}

console.log(sum(primes))

function factorial(n) { // A function to compute factorials
    let product = 1; // Start with a product of 1
    while (n > 1) { // Repeat statements in {} while expr in () is true
        product *= n; // Shortcut for product = product * n;
        n--; // Shortcut for n = n - 1
    } // End of loop
    return product; // Return the product
}
console.log(factorial(4)) // => 24: 1*4*3*2


function factorial2(n) { // Another version using a different loop
    let i, product = 1; // Start with 1
    for (i = 2; i <= n; i++) // Automatically increment i from 2 up to n
        product *= i; // Do this each time. {} not needed for 1-line loops 
    return product; // Return the factorial
}
console.log(factorial2(5)) // => 120: 1*2*3*4*5
