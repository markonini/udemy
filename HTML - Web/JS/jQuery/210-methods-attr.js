        // Selection the image
$("img").css("width", "200px");

    // Change only first one for be other picrure insted of original one
$("img:first-of-type").attr("src", "http://sunshinetour.com/wp-content/uploads/2018/11/mcilroy-relishing-return-to-sun-city.jpg");
// or we can sue 'first'
// $("img:first").attr("src", "http://sunshinetour.com/wp-content/uploads/2018/11/mcilroy-relishing-return-to-sun-city.jpg");

// Change only last one for be other picrure insted of original one
$("img").last().attr("src", "http://sunshinetour.com/wp-content/uploads/2018/11/mcilroy-relishing-return-to-sun-city.jpg");


    // Change the image with new one
// $("img").attr("src", "http://sunshinetour.com/wp-content/uploads/2018/11/mcilroy-relishing-return-to-sun-city.jpg");

        // Select text in the box and change value of type attribute 
// $("input").attr("type", "color");
// $("input").attr("type", "checkbox");


            // .val() method
// Get valuee in input box
$("input").val();
// write new value in text box
$("input").val("New text in text box");

// select from select input what is selected
$("select").val();

