// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});

var myCanvas;
var b = 0;

function setup() {
  myCanvas = createCanvas(750, 394);
  myCanvas.parent('mySketch');
  myCanvas.mouseOver(on);
  myCanvas.mouseOut(off);
  console.log("set up");
}

function on() {
  b = 1;
}

function off() {
  b = 0;
}

function draw() {
  if(b == 1) {
    flickerLogo();
  } else {
    staticLogo();
  }
}

function staticLogo() {
  //Draw the "P" triangles
  noStroke();

  fill(102, 45, 145);
  triangle(0, 112, 0, 164, 62, 112);
  triangle(0, 291, 49, 262, 49, 346);
  triangle(105, 221, 125, 189, 173, 221);

  fill(118, 63, 152);
  triangle(0, 164, 0, 291, 29, 221);
  triangle(105, 262, 118, 221, 173, 221);

  fill(84, 47, 135);
  triangle(0, 164, 29, 221, 62, 112);
  triangle(125, 189, 173, 221, 173, 164);

  fill(93, 46, 139);
  triangle(49, 155, 29, 221, 49, 221);

  fill(133, 82, 161);
  triangle(0, 291, 29, 221, 118, 221);
  triangle(105, 155, 121, 112, 173, 164);

  fill(126, 73, 157);
  triangle(0, 291, 0, 346, 49, 346);
  triangle(105, 155, 125, 189, 173, 164);
  triangle(49, 155, 62, 112, 105, 155);

  fill(110, 54, 148);
  triangle(62, 112, 105, 155, 121, 112);
  triangle(49, 262, 105, 262, 118, 221);
}


function flickerLogo() {

  fill(102, 45, 145);
  pickTri();

  fill(118, 63, 152);
  pickTri();

  fill(84, 47, 135);
  pickTri();

  fill(93, 46, 139);
  pickTri();

  fill(133, 82, 161);
  pickTri();

  fill(126, 73, 157);
  pickTri();

  fill(110, 54, 148);
  pickTri();
    /*
    noStroke();
    fill(102, 45, 145);
    *triangle(0, 112, 0, 164, 62, 112);

    fill(118, 63, 152);
    --triangle(0, 164, 0, 291, 29, 221);

    fill(84, 47, 135);
    --triangle(0, 164, 29, 221, 62, 112);

    fill(93, 46, 139);
    --triangle(49, 155, 29, 221, 49, 221);

    fill(133, 82, 161);
    --triangle(0, 291, 29, 221, 118, 221);

    fill(102, 45, 145);
    --triangle(0, 291, 49, 262, 49, 346);

    fill(126, 73, 157);
    --triangle(0, 291, 0, 346, 49, 346);

    fill(126, 73, 157);
    --triangle(49, 155, 62, 112, 105, 155);

    fill(110, 54, 148);
    --triangle(62, 112, 105, 155, 121, 112);

    fill(133, 82, 161);
    --triangle(105, 155, 121, 112, 173, 164);

    fill(126, 73, 157);
    --triangle(105, 155, 125, 189, 173, 164);

    fill(84, 47, 135);
    --triangle(125, 189, 173, 221, 173, 164);

    fill(102, 45, 145);
    --triangle(105, 221, 125, 189, 173, 221);

    fill(118, 63, 152);
    --triangle(105, 262, 118, 221, 173, 221);

    fill(110, 54, 148);
    --triangle(49, 262, 105, 262, 118, 221);
  }*/
}

function pickTri() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*15);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(0, 112, 0, 164, 62, 112);
        break;
      case 1:
        triangle(0, 164, 0, 291, 29, 221);
        break;
      case 2:
        triangle(0, 164, 29, 221, 62, 112);
        break;
      case 3:
        triangle(49, 155, 29, 221, 49, 221);
        break;
      case 4:
        triangle(0, 291, 29, 221, 118, 221);
        break;
      case 5:
        triangle(0, 291, 49, 262, 49, 346);
        break;
      case 6:
        triangle(0, 291, 0, 346, 49, 346);
        break;
      case 7:
        triangle(49, 155, 62, 112, 105, 155);
        break;
      case 8:
        triangle(62, 112, 105, 155, 121, 112);
        break;
      case 9:
        triangle(105, 155, 121, 112, 173, 164);
        break;
      case 10:
        triangle(105, 155, 125, 189, 173, 164);
        break;
      case 11:
        triangle(125, 189, 173, 221, 173, 164);
        break;
      case 12:
        triangle(105, 221, 125, 189, 173, 221);
        break;
      case 13:
        triangle(105, 262, 118, 221, 173, 221);
        break;
      case 14:
        triangle(49, 262, 105, 262, 118, 221);
        break;
      default:
        break;
    }
  }
}
