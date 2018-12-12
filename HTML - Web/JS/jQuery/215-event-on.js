// on() works similarly to addEventListener
// It lets you specify the type of event to listen for

// for to do click
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

// for keypress
$("input").on("keypress", function(){
    console.log("key pressed!")
});

// hover over, change font to be bolded
$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold")
});

// remove bold when you move mouse
$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal")
});

// Why use on();
// In most case, clikc() and on("click") will both get the job done. However, there is one key difference:
// click() only adds listeners for existing elements
// on() will add listeners for all potentioal future elements 
