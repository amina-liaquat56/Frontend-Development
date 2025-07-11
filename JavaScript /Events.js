         // Event Handling n JS

element.event = function() {
  // code to handle the event
};

       // Button click

const btn = document.querySelector('button');

btn.onclick = function() {
  console.log("Button was clicked");
};

       // Event Object

// Common Event Object Properties

// e.target: The element that triggered the event

// e.type: The type of event (e.g., "click")

// e.clientX, e.clientY: Mouse pointer coordinates

btn.onclick = function(e) {
  console.log(`Clicked at X: ${e.clientX}, Y: ${e.clientY}`);
  console.log(`Event type: ${e.type}`);
  console.log(`Target element: ${e.target.tagName}`);
};

           // Event Listeners

           // Adding an Event Listener

element.addEventListener(event, callback);

          // Removing an Event Listener

element.removeEventListener(event, callback);














