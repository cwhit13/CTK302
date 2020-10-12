var vol;
var y = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  //background (100);
  vol = (mic.getLevel()).toFixed(3);

  switch (state) {

    case 0: 
      background('blue');
      text("sshhhh", 300, 300);
      if (vol > .10) {
        state = 1
    }
     break;

    case 1:
      print("death to capitalism");
        background('purple');
      text("Will you shut up man", 300, 300);
      break;
    }
    textSize(18);
    text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
  }
  function touchStarted() {
    getAudioContext().resume();
  }

  function mouseReleased() {
    state = state + 1;
    if (state > 2) {
      state = 0;
    }
  }
