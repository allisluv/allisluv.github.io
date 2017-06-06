// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});


function setup() {
  var myCanvas = createCanvas(599, 249);
  myCanvas.parent('mySketch');
  background(200);
  fill(200);
  console.log("set up");
}
