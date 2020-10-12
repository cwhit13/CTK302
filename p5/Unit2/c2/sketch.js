var vol;
var y = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(3);

  switch (state) {

    case 0:
      if (vol > .10) {
        background('blue');
        text("sshhhh", 250, 250);
        break;
      }
      case 1:
        print("whatev");
        if (vol > .30) {
          background('purple');
          text("Will you shut up man", 250, 250);
          break;

        }
  }

  function mouseReleased() {
    state = state + 1;
    if (state > 2) {
      state = 0;
    }
  }

  function touchStarted() {
    getAudioContext().resume();
  }
