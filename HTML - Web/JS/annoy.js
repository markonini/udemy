// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("Yey, we made it!");

// Version 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) { // -1 jer kad se ne mecuje ona on pise -1 umesto broje index-a
	var answer = prompt("Are we there yet?");
}
alert("Yey, we made it!");

