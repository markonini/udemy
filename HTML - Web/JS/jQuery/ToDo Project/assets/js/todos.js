// Check Off Specific todos by Clicking
// check this li is clicked inside ul run this code
$("ul").on("click","li",function(){
    // if li is gray (it will be shown like rgb(0, 0, 0))
    $(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span", function(stagod){
    // remove li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // stop propagention of li, ul, etc
    stagod.stopPropagation();
});

// Creations of new todo's

$("input[type='text']").keypress(function(perazdera){
    // check is enter is pressed 
    if(perazdera.which === 13){
        // get value from input box
        var todoText = ($(this).val());
        // clear textbox
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});

// ISSSUUUEEEE!!!!!!!!!!!!
// Click() wil be only adds listeners for existing elements and
// on() will add listener for all potential future elements
// $("ul").on("click", "li", funtion(){} we can only add listener using jQuery on elements that exists when this code is run for the first ime
