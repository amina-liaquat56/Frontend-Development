       // Loops in Javascript

  // For Loop

// for (let count = 1; count <=5; count++) {
//     console.log("Amina Liaquat");
// }
// console.log("Loop has ended");

let sum = 0;
for (let i = 1; i <= 5; i++ ) {
  sum = sum + i;
}
console.log("sum =", sum);

    // While Loop

let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}
    // Do while loop

let i = 20;
do {
  console.log("UAF");
  i++;
}while (i <=10);

let i = 0;
do {
  console.log(i); 
  i++;
} while (i < 5);

     // For- of loop

let str = "Icodeguru";

for (let i of str ) {
  console.log("i=", i)
}

const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color); // red, green, blue
}

      For- in loop

const person = {name: 'Burhan', age: 15};
for (let key in person) {
  console.log(key, person[key]); 
}

      // Strings

let str = "Icodeguru";
let str2 = 'AminaLiaquat';
console.log(str)
console.log(str2)
           // string length
console.log(str.length)
console.log(str2.length)
         // String indices
let str = "javascrpt";

console.log(str[0]);
console.log(str[6]);

        // Template literals in Javacsript

let specialString = 'This is a Template Literals';
console.log(specialString)
console.log(typeof specialString);

         // String interpolation

let obj = {
  item:"pen",
  price: 9,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

          // escape character
console.log ("Icode \n Guru")
console.log ( "Amina \t Liaquat")











































