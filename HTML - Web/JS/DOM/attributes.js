// Use getAttribute() adn setAttribute() to read and write attributes like src or href
var img1 = document.getElementsByTagName("img")[0];
//Get attribute for "src"
img1.getAttribute("src");
// Change attribute
img1.setAttribute("src","https://i.redd.it/2gv0avr51am11.jpg")

// Secound example
var img2 = document.getElementsByTagName("img")[1];
img2.getAttribute("src");
img2.setAttribute("src","https://cdn.omlet.co.uk/images/cache/1024/682/Dog-Siberian_Husky-A_beautiful_Siberian_Husky_puppy,_resting_its_tired,_little_legs.jpg")

// Example
var a = document.querySelector("a");
a.setAttribute("href","https://www.corgies.com");

// Change text "link to google"
var link = document.querySelector("a");
link.textContent = "Link to Corgies"

