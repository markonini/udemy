// Write function printRevers number from array

// Moj nacij preko funkcije arr.reverse
// var arr = [1,2,4,6,8];

// function printRevers(arr) {
// 	console.log("Original array " + arr);
// 	var new_arr = arr.reverse();
// 	console.log("Revers array " + new_arr);
// }
// printRevers(arr);

// skolski sa for

var arr = ["a",2,4,6,8];

function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse(arr);

// write a function isUniform() which takes an array as an argument and returns true all elements in the array are identical

function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true
}

// Write a function sumArray() that accepts an array of numbers adnd return the sum of all numbers in the array

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(number) {
		total += number;
	});
	console.log("Sum is " + total);
}

// Write a function max() that accepts an array of number and returns the maximum number in the array
function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max ) {
			max = arr[i];
		}
	}
return max;
}
