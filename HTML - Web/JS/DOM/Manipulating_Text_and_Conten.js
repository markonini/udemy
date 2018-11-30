// Changing text of <p>
var p = document.getElementsByTagName("p")[0];
p.textContent
var ul = document.querySelector("ul");
ul.textContent

// update text - it wil repalce all old text also removed <strong>
p.textContent = "Corgi mixes are really relly super adorable";

// innerHTML - similar to textContent, except it returns a string of all the HTML contained in a given element
var tag = document.querySelector("p");
tag.innerHTML   //"Corgi mixes are <strong>super</strong> adorable"

// In-line change
document.querySelector("h1").textContent = "End of this lession!";
