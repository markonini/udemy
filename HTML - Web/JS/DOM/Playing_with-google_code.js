// Select google ain image
var logo = document.getElementById("hplogo");
// Change google image to be something else
logo.setAttribute("src", "https://www.yourpurebredpuppy.com/dogbreeds/photos-AB/bichonfrisef2.jpg");

// Change the width and height as original image from google
logo.style.width = "200px";
logo.style.height = "100px";
logo.style.border = "2px solid purple";

// //select all "a"and change h ref to go somewhere else
// selecting all "a"change text to be pink
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
   links[i].style.background = "pink"
};

// selecting all "a"change border and color
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
   links[i].style.border = "1px dashed purple";
   links[i].style.color = "orange"
};

// change href link to point to bing
var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute("href", "https://www.bing.com");
};
