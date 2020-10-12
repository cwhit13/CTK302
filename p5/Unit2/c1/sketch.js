var x = 0;
var mic;
var vol;
//let velocity = 10; I thought I could plug in the code from the stoplight
//project to make it work but it doesn't seem to be working :( :(
//var c = rect

function setup() {
  createCanvas(500, 500);
  rect(200, 200, 50, 20);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  //background(220);
  //rect(200, 200, 50, 20);
  //fill('purple');
  //x = x + velocity;
  //if (x > width)
  //  x = 0;
  //  vol = (mic.getLevel()).toFixed(2);

  //  if (vol > .5) {}
  switch (state) {

    case 0:
      background("yellow")
      rect(x, 200, 50, 20);
      fill('purple');
      //velocity = 0;
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
}
//timer = timer + 1;
//if (timer > 100) {
  //timer = 0;
//  state++;
//  if (state > 2) state = 0;


function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
