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

let r = n.pop() // pop returns the popped element
console.log(n, r)
let r = n.push(56) // push returns the new array length
console.log(n, r)
let r = n.shift()
console.log(r, n) // Removes an element from the start of the array

let r = n.shift()
// console.log(r, n) // Removes an element from the start of the array

let r = n.unshift(72)
console.log(r, n)
console.log(r)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num.length)
delete num[0]
console.log(num.length)

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)

// sort method
let compare = (a, b)=>{
  return b - a
}
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare)
num.reverse()
console.log(num)

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num)
console.log(deletedValues)

let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)


















