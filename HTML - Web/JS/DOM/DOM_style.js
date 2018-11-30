// selecting color of the border
var h1 = document.querySelector("h1");
h1.style.color = "blue"
h1.style.border = "5px solid pink";
h1.style.fontSize = "70px";
h1.style.background = "yellow"
h1.style.marginTop = "200px"


// this line of code above is repeated to much, there is better way.
// We can define a CSS class and then toggle it on or off with JS
// Instead of this:
var tag = document.getElementById("highlight");
tag.style.color = "blues";
tag.style.border = "10px solud red";

    // Define a Class in CSS
    .some-class {
        color: blue;
        border:10px solid red;
    }

var tag = document.getElementById("highlight");
// add the new class to the selected element
tag.classList.add("some-class");

// Class list

// Define class in CSS
.another-class {
    color: purple;
    fontSize: 76px;
}

var tag = document.querySelector("h1");
// Add a class to the selected element
tag.classList.add("another-class");
// Removes a class
tag.classList.remove("another-clas");
// Toggle a class
document.classList.toggle("another-class");

// JS for DOM_style.html
var p = document.querySelector("p");
p.classList.add("big");

