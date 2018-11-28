//isEven
//First way to solve
// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

//secound solution
function isEvent(num) {
	return num % 2 === 0;
}

//Factorial 2nd
// function factorial(num) {
//    if(num === 0) {
//       return 1;
//    }
//    return num * factorial(num-1);
// }

function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result = result * i;
	}
	//return the result variable
	return result;
}

//replcate all '-' with "_"'s
function kebabToSnake(str) {
	if(typeof str !== "string") {
		return "this is not a string";
	}
	var newword = str.replace (/-/g,"_");
	return newword;
}

// /g - means replace all caracters
