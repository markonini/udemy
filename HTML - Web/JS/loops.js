console.log("Print all numbers between -10 and 19")
var counter = -10;
	while(counter < 20) {
		console.log(counter);
			counter++;
	}

console.log("Print all even numbers between 10 and 40")
// var counter = 10;
// 	while(counter <= 40) {
// 		if(counter % 2 === 0) {
// 		console.log(counter);
// 		}
// 		counter+=2;
// 	}

// if (counter % 2 === 0) {
// 	console.log(counter);
// 	}
// 	counter+=1;

while(counter <= 40) {
	console.log(counter);
	counter+=2;
}

console.log("Print all odd numbers between 300 and 333")
// var num2 = 300;
// 	while(num2 <= 333) {
// 		if(num2 % 2 === 1) {
// 		console.log(num2);
// 		}
// 	num2++;
// 	}

var num2 = 300;
	while(num2 <= 333) {
		if(num2 % 2 !== 0) {
		console.log(num2);
		}
	num2+=1;
	}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
// var num3 = 5;

// 	while(num3 <= 50) {
// 		if(num3 % 3 === 0 && num3 % 5 === 0) {
// 		console.log(num3);
// 		}
// 	num3++;
// 	}

var num3 = 5;

	while(num3 <= 50) {
		if(num3 % 3 === 0 && num3 % 5 === 0) {
		console.log(num3);
		}
	num3+=1;
	}

