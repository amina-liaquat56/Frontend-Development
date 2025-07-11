   //  Comments in JavaScript 

// This is single line comment

/* This is a 
  multiline comment */

   // operators in JS

//  Arithematic operator

let a = 8;
let b = 4;

console.log("a =",a, "& b =" , b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b);
console.log("a ** b =",a ** b);

   // Unary operators 
let x = 5;
// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

     // Assignment operators

let a = 5;

console.log(" a =", a = 3);
console.log(" a =", a += 3);
console.log(" a =", a -= 3);
console.log(" a =", a *= 3);
console.log(" a =", a /= 3);
console.log(" a =", a %= 3);
console.log(" a =", a **= 3);

     // Comparison   Operators

let x = 9;
let y = 7;

console.log("9 == 7", x == y);
console.log("9 === 7", x === y);
console.log("9 != 7", x != y);
console.log("9 !== 7", x !== y);
console.log("9 > 7", x > y);
console.log("9 < 7", x < y);
console.log("9 >= 7", x >= y);
console.log("9 <= 7", x <= y);

      // Logical operrators

let a = 6;
let b = 5;

let cond1 = a > b ;
let cond2 = a === 6;
console.log ("cond1 && cond2 =", cond1 && cond2);
console.log ("cond1 || cond2 =", cond1 || cond2);
console.log ("!(6<5) =", ! (a < b));

    // Conditional Statements 

let age = 18;
if (age >= 18) {
   console.log ("You are an Adult.");
}

let mode = "dark";
let color;
if  (mode === "dark "){
    color = "black";
}
if ( mode === "light "){
    color = "white";
}
console.log(color);

let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's not too hot today.");
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Enjoy the sun";
console.log(action);



