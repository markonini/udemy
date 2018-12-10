// select all div and give them purple backgroup
$("div").css("background", "purple");

// select the divs with class highlight and make them 200px wide
$(".highlight").css("width", "200px");

// select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid orange");

// select frist div only and change his color to pink
$("div:first-of-type").css("color", "pink");
// or we can use div:first which is slower
$("div:first").css("color", "pink");
