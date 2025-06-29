        // Arrays in JS
let marks_class_12 = [91 ,  84  ,  85  ,  79 , 67 , 98 ]
console.log(marks_class_12)

            // Arrays Values
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])

            // Length property

console.log("The length of  marks_class_12 is" , marks_class_12.length)

            // changing and adding value in array
 
marks_class_12[6] = 89         // Adding the value
marks_class_12[0] = 96         // Changing the value 
console.log(marks_class_12)

     // Arrays are object

console.log( typeof marks_class_12)   // output: object

           // Arrays Methods 

let num = [1 , 2 , 3 , 34, 4 ]
let b = num.toString()     //  b is now string 
console.log(b, typeof b)

let c = num.join("_")
console.log(c, typeof c)

let n = [2 ,3 , 4 ,5 ]

n.pop()    // remove the last element

n.push(9)    // add the element at end

let r = n.shift()
// console.log(r, n) // Removes an element from the start of the array

let r = n.unshift(72)
console.log(r, n)
console.log(r)


















