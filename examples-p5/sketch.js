// p5 specific
// stuff
var x = 0;
var y = 100;
var w = 500;
var h = 0;
// the functions setup and draw
// are executed by p5. This is not normal for javascript
// normally you have to call every function by yourself
function setup() {
  // setup is executed once!
  var canvas = createCanvas(500, 400); // create the canvas
  canvas.parent('jimmy'); // append it to the div in our html
  y = height / 2; // the variables height and width are part of p5
  // the HSL color mode is much cooler then the RGB mode
  colorMode(HSL, 360, 100, 100, 100);
}

function draw() {
  // draw is executed all the time!
  // we can define colors overloaded
  // depending on how many arguments you pass
  // a diffrrent color you get
  // background(255); // greyscale
  // background(255, 20); // greyscale + alpha
  // background(255,100, 20); // R G B or HSL
  background(h, 50, 60, 20); // R G B + A or HSL A

  // there are a lot of build in functions
  // in p5.js you need to read the reference
  // fill(Math.abs(360 -h),50,60);
  // stroke(Math.abs(360 -h),50,60);
  // strokeWeight(5);
  // lets make some movement
  var diam = 20 + random(-50, 50);
  ellipse(x, y + random(-5, 5), diam, diam);
  x++; // increase x
  // but constrain it to the canvas
  if (x > width) {
    x = 0;
  }


  h++; // increase h
  console.log('hue is %s', h); // log it
  // also constrain it to 360 degrees
  // could also be h%360 within the color of background
  if (h >= 360) {
    h = 0;
  }
}