// getElementById
document.getElementById("highlight");
var tag = document.getElementById("highlight");
console.dir(tag)

// getElementsByClassName
document.getElementsByClassName("bolded");
var tags = document.getElementsByClassName("bolded");
tags[0];

// getElementsByTagName
var tags = document.getElementsByTagName('li');
console.dir(tags[0]);

// 
var body = document.getElementsByTagName("body")[0]

// querySelector - always return one element is not like class selector (getElementsByClassName) he return like list
var tag = document.querySelector("#highlight");
var tag = document.querySelector(".bolded");
var h1 = document.querySelector("h1");
var li = document.querySelector("#highlight");
var li = document.querySelector(".bolded");
var li = document.querySelector("li a.special");

// querySelectorAll - return all for example (h1) on the page
var lis = document.querySelectorAll("li");
lis // those are objects

var bolded = document.querySelectorAll(".bolded"); // return all "bolded" class
var bolded = document.querySelector(".bolded") // return only first "bolded" class
