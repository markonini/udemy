            // The most importand ones are, Click(), keypress(), on()
// Click() method
$("h1").click(function(){
    alert("clicked")
});

// $("button").click(function(){
//     alert("button clicked")
// });

$("button").click(function(){
    $(this).css("background", "pink")
});

     // Keypress method
// $("input").keypress(function(){
//     console.log("you pressed a key!")
// });

$("input").keypress(function(event){
    console.log(event)
});

// which:106 every key has it's own code with command above it is 106
// if user hit's enter then aler it (code 13)
$("input").keypress(function(perazdera){
    if(perazdera.which === 13){
        alert("you clicked enter")
    }
});
