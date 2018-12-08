var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squeres = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squeres.length; i++) {
    // add initial colors to squers
    squeres[i].style.backgroundColor = colors[i];

    // add click listeners to squers
    squeres[i].addEventListener("click", function(){
        // grab color of clicked squere
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        } 
    });
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squeres.length; i++) {
		//change each color to match given color
		squeres[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}