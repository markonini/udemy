// select elem with id "special" and give it a border
$("#special").css("border", "2px solid red");

// we can aslo pass in an object with styles
var styles = {
    backgroundColor :"pink",
    fontWeight : "bold"
};

$("#special").css(styles);

// Manipulation style
// .css(property, value)
$("li").css("color", "yellow");

// select all elements with class "big"
// and give them an orange border
$(".big").css("border", "1px dashed orange");

//              Example to change color for few "li" with
// DOM it goes like:
var lis = document.querySelectorAll("li");
for( var i = 0; i < lis.length; i++) {
    lis[i].style.color = "green"
};

// and with jQuery is like:
$("li").css("color", "red");

//              Example
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    backgroundColor: "rgba(89, 45, 20, 0.5)"
});
