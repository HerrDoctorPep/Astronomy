// define the drawing context
var ctx = myCanvas.getContext("2d");

// draw a body in a color
function DrawBody(Planet,ColorCode) {
  var rect = myCanvas.getBoundingClientRect();
  ctx.fillStyle = ColorCode;
  ctx.beginPath();
  ctx.arc(MeterToPixel * Planet.place.x - rect.left, MeterToPixel * Planet.place.y - rect.top, 5, 0, Math.PI * 2);
  ctx.fill();
}

// frame refresh function //
function Do_a_Frame () {
  // clear the frame //
//  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  DrawBody(Earth,"blue");
  DrawBody(Sun,"yellow");
}
