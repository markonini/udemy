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

// What is big change between innerHTML and textContent also. If you want to change some text and for text you put like "<h1>Goodbye</h1>"
// and you use .textContent is will display all text with <h1>
// But if you use .innerHTML he will only show text and applye it with h1 style.
document.body.textContent = "<h1>Goodbye</h1>"; //It will dispaly text on page like <h1>Goodbye</h1>
document.body.innerHTML = "<h1>goodbye</h1>"; //it will show only Goodbye
