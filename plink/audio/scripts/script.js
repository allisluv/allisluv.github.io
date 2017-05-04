// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//get the unordered list
    var buttons = document.getElementById('buttons');
    buttons.style.width = "500px";
//get all the list items into an array
    var list = document.getElementsByTagName('li');
//create a variable to hold the number of list items
    var x = 0;

//itterate through the list to see how many
//list items there are
    for (var i = 0; i < list.length; i++) {
      x += 170; // (160 is the width of one list item including its margins)
    }
    console.log(buttons.style.width + ' + ' + x);
//change the width of the list to reflect the number of list items
    buttons.style.width = x + "px";
    console.log(buttons.style.width + ' + ' + x);
  });
