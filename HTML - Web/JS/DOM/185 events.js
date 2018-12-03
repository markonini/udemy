// The Syntax
Element.addEventListener(type, function);
// Example
var button = document.querySelector("button");
button.addEventListener("click",function() {
    console.log("someone clicked the button!");
});

// Example from "Manipulating_Text_and_Conten.html"
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    alert("h1 was clicked");
});

// new example, we cna have more listener on one h1
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.background = "orange"
});

// Example three
document.querySelector("ul").addEventListener("click", function() {
    console.log("you click the url")
});

// setup listener for every li (change color)
var lis = document.querySelectorAll("li")
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    });
}

// you don't need to use anonimus funcition (), we can define it and just refer to it like:
var paragraph = document.querySelector("p");

paragraph.addEventListener("click", changeText);
function changeText(){
    paragraph.textContent = "someone clicked on P!!!";
}

