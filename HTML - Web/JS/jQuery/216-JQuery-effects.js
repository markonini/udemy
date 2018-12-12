                // fadeout div's when you click button

// $("button").on("click", function(){
//     $("div").fadeOut(1000, function(){
//         console.log("fadecomplited!")
//     });
// });

        // to delte div after fadeout
// $("button").on("click", function(){
//     $("div").fadeOut(1000, function(){
//         $(this).remove();
//     });
// });

        // to fadeIn (to see them), we setup for div display to be = none in html
    // $("button").on("click", function(){
    //     $("div").fadeIn(1000, function(){
    //     });
    // });

        // FadeToggle
        // $("button").on("click", function(){
        //     $("div").fadeToggle(1000, function(){
        //     });
        // });


                        // Slidedown or slideToggle
        // $("button").on("click", function(){
        //     $("div").slideDown()
        // });

            // SlideUp
        // $("button").on("click", function(){
        //     $("div").slideUp()
        // });

        // slideToggle
        $("button").on("click", function(){
            $("div").slideToggle(1000, function(){
                // console.log("slide is done!");
                $(this).remove()
            });
        });
