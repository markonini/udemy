// select elem with id "special" and give it a border
$("#special").css.("border", "2px solid red");

// we can aslo pass in an object with styles
var styles = {
    backgroundColor :"pink",
    fontWeight : "bold"
};

$("#special").css(styles);
