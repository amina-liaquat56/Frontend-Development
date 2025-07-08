//  functions

function myfirstfunction( ){
  alert("Hello World")
}

myfirstfunction();

function mysecondfunction() {
    let a = 10;
    let b = 30;
    let result = a + b;
    return result;
}

// alert(mysecondfunction ());
let output = mysecondfunction ();

let result2 = output + 10;

alert(result2);

function mythirdfunction( name , age , course){
    // alert("Hello" + name + "Your age is" + age + "And Your Course is" + course );
    alert(`Hello ${name} Your age is ${age} And Your Course is ${course}`)

}

mythirdfunction*("Amina", 24 , "Web Development");
