var colors = ["red","orange","yellow","green"];

// First example- For loop
// for(var i=0; i < colors.lenght; i++) {
//     console.log(colors[i]);
// }

// forEach - 2nd
function printColor(color) {
    console.log("*********");
    console.log(color);
    console.log("*********");
}

colors.forEach(printColor);

// Example with passing one color from array colors;
colors.forEach(function(color) {
    console.log(color);
});

// While loop example;
var count = 0;
while(count < colors.length) {
    console.log(colors[count]);
    count++;
}

