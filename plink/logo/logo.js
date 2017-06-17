// JavaScript Document

//Change s to any value between 0 and 1
//to scale the logo
var s = 1;


// Get the div to be scaled
var div = document.getElementById('mySketch');
console.log(div);
var myCanvas;
// These are the width and height that
//triangles sizes match before being scaled
var w = 750;
var h = 394;
// variable b captures if mouse is hovering
var hover = 0;

//calculate scaled height and width
w = w*s;
h = h*s;
//apply height and width to CSS
div.style.width = w + 'px';
div.style.height = h + 'px';

function setup() {
  myCanvas = createCanvas(w, h); //use scaled height and width
  myCanvas.parent('mySketch');
  myCanvas.mouseOver(on); //listen for hover
  myCanvas.mouseOut(off); //listen for hover
  console.log("set up");
}

//if mouse rolls over logo, change hover
function on() {
  hover = 1;
}
//if mouse rolls off logo, change hover
function off() {
  hover = 0;
}

function draw() {
  //only flicker if mouse is hovering the logo
  if(hover == 1) {
    flickerLogo();
  } else {
    staticLogo();
  }
}

function staticLogo() {
  //scale the logo to match the canvas
  scale(s);

  noStroke();
  //Draw the "P" triangles
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

  //Draw the "L" triangles
  fill(241, 115, 172);
  triangle(173, 164, 173, 241, 223, 164);
  triangle(173, 311, 173, 394, 271, 394);

  fill(242, 135, 183);
  triangle(173, 241, 223, 164, 223, 263);

  fill(244, 154, 193);
  triangle(173, 241, 223, 263, 173, 311);

  fill(240, 103, 166);
  triangle(223, 263, 173, 311, 223, 353);

  fill(241, 125, 177);
  triangle(223, 353, 271, 394, 338, 353);

  fill(239, 91, 161);
  triangle(271, 394, 338, 353, 338, 394);

  //Draw the "I" triangles
  fill(241, 90, 34);
  triangle(165, 27, 198, 103, 229, 0);

  fill(245, 131, 69);
  triangle(198, 103, 229, 0, 262, 75);

  fill(243, 112, 50);
  triangle(198, 103, 262, 75, 270, 230);

  fill(240, 78, 35);
  triangle(262, 75, 270, 230, 303, 216);

  //Draw the "." triangles
  fill(255, 230, 0);
  triangle(283, 262, 278, 301, 350, 270);

  fill(255, 245, 109);
  triangle(283, 262, 350, 270, 319, 247);

  fill(255, 221, 0);
  triangle(278, 301, 306, 289, 310, 325);

  fill(255, 246, 133);
  triangle(306, 289, 310, 325, 345, 309);

  fill(255, 244, 80);
  triangle(306, 289, 345, 309, 350, 270);

  //Draw the "N" triangles
  fill(0, 166, 81);
  triangle(356, 89, 356, 181, 408, 89);
  triangle(356, 181, 402, 212, 356, 322);
  triangle(498, 173, 544, 248, 498, 248);

  fill(0, 154, 78);
  triangle(356, 181, 408, 89, 435, 137);
  triangle(402, 212, 356, 322, 379, 322);
  triangle(435, 137, 439, 221, 484, 223);
  triangle(498, 173, 544, 248, 544, 140);

  fill(0, 178, 107);
  triangle(356, 181, 402, 155, 402, 212);
  triangle(402, 155, 435, 137, 439, 221);
  triangle(495, 322, 544, 248, 544, 322);

  fill(0, 175, 98);
  triangle(402, 212, 379, 322, 402, 322);
  triangle(498, 248, 520, 286, 544, 248);

  fill(0, 159, 79);
  triangle(439, 221, 484, 223, 495, 322);
  triangle(498, 173, 544, 140, 498, 89);

  fill(0, 172, 91);
  triangle(484, 223, 495, 322, 520, 286);
  triangle(498, 89, 544, 89, 544, 140);

  //Draw the "K" triangles
  fill(0, 161, 228);
  triangle(544, 161, 593, 161, 593, 258);
  triangle(544, 294, 593, 317, 650, 257);

  fill(0, 174, 239);
  triangle(544, 161, 593, 258, 569, 285);
  triangle(544, 294, 544, 394, 593, 394);
  triangle(638, 208, 650, 257, 682, 161);
  triangle(615, 293, 643, 329, 650, 257);

  fill(0, 166, 233);
  triangle(544, 161, 544, 294, 569, 285);
  triangle(643, 329, 686, 394, 750, 394);

  fill(0, 192, 243);
  triangle(544, 294, 593, 394, 593, 317);
  triangle(650, 257, 682, 161, 747, 161);

  fill(68, 200, 245);
  triangle(569, 285, 638, 208, 650, 257);
  triangle(643, 329, 650, 257, 750, 394);
}


function flickerLogo() {
  //scale logo to fit canvas
  scale(s);

  //Make "P" flicker
  fill(102, 45, 145);
  pickP();

  fill(118, 63, 152);
  pickP();

  fill(84, 47, 135);
  pickP();

  fill(93, 46, 139);
  pickP();

  fill(133, 82, 161);
  pickP();

  fill(126, 73, 157);
  pickP();

  fill(110, 54, 148);
  pickP();

  //Make "L" flicker
  fill(244, 154, 193);
  pickL();

  fill(243, 145, 188);
  pickL();

  fill(242, 135, 183);
  pickL();

  fill(241, 125, 177);
  pickL();

  fill(241, 115, 172);
  pickL();

  fill(240, 103, 166);
  pickL();

  fill(239, 91, 161);
  pickL();

  //Make "I" flicker
  fill(245, 131, 69);
  pickI();

  fill(244, 121, 50);
  pickI();

  fill(243, 112, 50);
  pickI();

  fill(242, 101, 41);
  pickI();

  fill(241, 90, 34);
  pickI();

  fill(240, 78, 35);
  pickI();

  fill(239, 65, 35);
  pickI();

  //Make "." flicker
  fill(255, 246, 133);
  pickD();

  fill(255, 245, 109);
  pickD();

  fill(255, 244, 80);
  pickD();

  fill(255, 243, 42);
  pickD();

  fill(255, 242, 0);
  pickD();

  fill(255, 230, 0);
  pickD();

  fill(255, 221, 0);
  pickD();

  //Make "N" flicker
  fill(0, 178, 107);
  pickN();

  fill(0, 175, 98);
  pickN();

  fill(0, 172, 91);
  pickN();

  fill(0, 168, 85);
  pickN();

  fill(0, 166, 81);
  pickN();

  fill(0, 159, 79);
  pickN();

  fill(0, 154, 78);
  pickN();

  //Make "K" flicker
  fill(68, 200, 245);
  pickK();

  fill(0, 192, 243);
  pickK();

  fill(0, 185, 242);
  pickK();

  fill(0, 179, 240);
  pickK();

  fill(0, 174, 239);
  pickK();

  fill(0, 166, 233);
  pickK();

  fill(0, 161, 228);
  pickK();
}

//Assign a triangle to a new color^
function pickP() {
  // x determines frequency of color change
  var x = 0;
  // y determines which triangle gets the color
  var y = 0;
  x = Math.floor(Math.random()*20); // number changes frequency
  y = Math.floor(Math.random()*15); // number of triangle options (number of cases)

  // 1 out of 20 chance that a triangle will change colors
  if (x == 1) {
    //assign triangle based on random y^
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

//Assign a triangle to a new color^
function pickL() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*7);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(173, 164, 173, 241, 223, 164);
        break;
      case 1:
        triangle(173, 311, 173, 394, 271, 394);
        break;
      case 2:
        triangle(173, 241, 223, 164, 223, 263);
        break;
      case 3:
        triangle(173, 241, 223, 263, 173, 311);
        break;
      case 4:
        triangle(223, 263, 173, 311, 223, 353);
        break;
      case 5:
        triangle(223, 353, 271, 394, 338, 353);
        break;
      case 6:
        triangle(271, 394, 338, 353, 338, 394);
        break;
      default:
        break;
    }
  }
}

//Assign a triangle to a new color^
function pickI() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*4);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(165, 27, 198, 103, 229, 0);
        break;
      case 1:
        triangle(198, 103, 229, 0, 262, 75);
        break;
      case 2:
        triangle(198, 103, 262, 75, 270, 230);
        break;
      case 3:
        triangle(262, 75, 270, 230, 303, 216);
        break;
      default:
        break;
    }
  }
}

//Assign a triangle to a new color^
function pickD() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*7);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(283, 262, 278, 301, 350, 270);
        break;
      case 1:
        triangle(283, 262, 350, 270, 319, 247);
        break;
      case 2:
        triangle(278, 301, 306, 289, 310, 325);
        break;
      case 3:
        triangle(306, 289, 310, 325, 345, 309);
        break;
      case 4:
        triangle(306, 289, 345, 309, 350, 270);
        break;
      default:
        break;
    }
  }
}

//Assign a triangle to a new color^
function pickN() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*16);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(356, 89, 356, 181, 408, 89);
        break;
      case 1:
        triangle(356, 181, 402, 212, 356, 322);
        break;
      case 2:
        triangle(498, 173, 544, 248, 498, 248);
        break;
      case 3:
        triangle(356, 181, 408, 89, 435, 137);
        break;
      case 4:
        triangle(402, 212, 356, 322, 379, 322);
        break;
      case 5:
        triangle(435, 137, 439, 221, 484, 223);
        break;
      case 6:
        triangle(498, 173, 544, 248, 544, 140);
        break;
      case 7:
        triangle(356, 181, 402, 155, 402, 212);
        break;
      case 8:
        triangle(402, 155, 435, 137, 439, 221);
        break;
      case 9:
        triangle(495, 322, 544, 248, 544, 322);
        break;
      case 10:
        triangle(402, 212, 379, 322, 402, 322);
        break;
      case 11:
        triangle(498, 248, 520, 286, 544, 248);
        break;
      case 12:
        triangle(439, 221, 484, 223, 495, 322);
        break;
      case 13:
        triangle(498, 173, 544, 140, 498, 89);
        break;
      case 14:
        triangle(484, 223, 495, 322, 520, 286);
        break;
      case 15:
        triangle(498, 89, 544, 89, 544, 140);
        break;
      default:
        break;
    }
  }
}

//Assign a triangle to a new color^
function pickK() {
  var x = 0;
  var y = 0;
  x = Math.floor(Math.random()*20);
  y = Math.floor(Math.random()*12);

  if (x == 1) {
    switch (y) {
      case 0:
        triangle(544, 161, 593, 161, 593, 258);
        break;
      case 1:
        triangle(544, 294, 593, 317, 650, 257);
        break;
      case 2:
        triangle(544, 161, 593, 258, 569, 285);
        break;
      case 3:
        triangle(544, 294, 544, 394, 593, 394);
        break;
      case 4:
        triangle(638, 208, 650, 257, 682, 161);
        break;
      case 5:
        triangle(615, 293, 643, 329, 650, 257);
        break;
      case 6:
        triangle(544, 161, 544, 294, 569, 285);
        break;
      case 7:
        triangle(643, 329, 686, 394, 750, 394);
        break;
      case 8:
        triangle(544, 294, 593, 394, 593, 317);
        break;
      case 9:
        triangle(650, 257, 682, 161, 747, 161);
        break;
      case 10:
        triangle(569, 285, 638, 208, 650, 257);
        break;
      case 11:
        triangle(643, 329, 650, 257, 750, 394);
        break;
      default:
        break;
    }
  }
}
