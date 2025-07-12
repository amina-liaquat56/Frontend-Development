           // Prototype in JS

let student = {
    name: "Amina",
    printName: function () {
        console.log(this.name);
    }
};

let teacher = {
    subject: "Math"
};

teacher.__proto__ = student;

teacher.printName();  // Output: Amina

           // Classes in JS

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

let s1 = new Student("Ali", 22);
s1.showDetails();  // Output: Ali is 22 years old.

                // Inheritence in JS

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark!");
    }
}

let dog1 = new Dog("Tommy");
dog1.makeSound();  // Output: Bark!

            // Super keyword

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name);  // calling parent constructor
        this.role = role;
    }

    showRole() {
        super.greet();  // calling parent method
        console.log(`My role is ${this.role}`);
    }
}

let emp1 = new Employee("Amina", "Developer");
emp1.showRole();

            // Error Handling

try {
    let x = 5 / 0;
    if (!isFinite(x)) {
        throw new Error("Division by zero is not allowed");
    }
    console.log(x);
} catch (err) {
    console.log("Error:", err.message);
}



































