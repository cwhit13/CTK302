var x = 0;
var mic;
var vol;
let velocity = 10;
var c = rect

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  rect(200, 200, 50, 20);
  fill('purple');
  x = x + velocity;
  if (x > width) {
    x = 0;

    vol = (mic.getLevel()).toFixed(2);

    if (vol > .5) {}
    switch (state) {

      case 0:
        text("0", 100, 100);
        velocity = 0;
        vol = (mic.getLevel()).toFixed(2);
        if (vol > .5) {
          x += 10;
          break;

          if (vol > .5) {
            x += 10;


          }
        }
    }
    if (w > width) x = 0;

    timer = timer + 1;
    if (timer > 100) {
      timer = 0;
      state++;
      if (state > 2) state = 0;
    }


    function mouseReleased() {
      state++;
      if (state > 2) state = 0;

    }

    function touchStarted() {
      getAudioContext().resume();
    }
