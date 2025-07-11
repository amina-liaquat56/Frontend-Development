      // DOM (Document object model)
      
// DOM Methods

// document.getElementById("id")
let title = document.getElementById("main-heading");
title.innerText = "Welcome to JavaScript!";

// document.getElementsByClassName("class")
let boxes = document.getElementsByClassName("box");
boxes[0].innerText = "First Box";

//document.getElementsByTagName("tag")
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);

         // Query Selectors

//document.querySelector("selector")
let firstBox = document.querySelector(".box");
firstBox.style.backgroundColor = "yellow";

//document.querySelectorAll("selector")
let allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => box.innerText = "Updated!");

            // DOM Properties

// innerText:	Gets or sets visible text (ignores hidden elements)
// textConten:t	Gets or sets all text (includes hidden text)
// innerHTML:	Gets or sets HTML content inside an element
// style:	Used to set inline CSS styles

let heading = document.getElementById("title");
heading.innerText = "New Title";
heading.style.color = "blue";

       // DOM Manipulation
      // Insert  Elements

node.append( el ) //adds at the end of node (inside)
node.prepend( el ) //adds at the start of node (inside)
node.before( el ) //adds before the node (outside)
node.after( el ) //adds after the node (outside)

let newDiv = document.createElement("div");
newDiv.innerText = "I’m new!";
document.body.append(newDiv); // Adds at the end of <body>

              // Delete Element

node.remove( ) //removes the node

         // Attributes

getAttribute( attr ) //to get the attribute value
setAttribute( attr, value ) //to set the attribute value

let img = document.querySelector("img");

// Get attribute
let src = img.getAttribute("src");

// Set attribute
img.setAttribute("alt", "Cute Cat");

            // Style 

node.style















