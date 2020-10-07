var img1;
var mic;
var vol;
var c = 'yellow' ;
function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

  img1= loadImage("assets/img1.png")
  imageMode (CENTER);
  background(c);
}

function touchStarted() {
  getAudioContext().resume();
}
}

function draw() {
  background (800);
  vol = (mic.getLevel()).toFixed(2); 

// check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
  c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("Greetings and Salutations. Please click on the screen to begin\npermission for mic input.\nMy volume is " + vol, 10, 60);

  image(img1, width/2, height/2, 400, 400);

  switch (state) {
    case 0:
background ('red');
text ("state 0", 250, 250);
    break ;

    case 1:
    background ('blue');
    text ("thicc ass boy", 250, 250);
    break ;

    case 2:
    background ('purple');
    text ("state 2", 250, 250);
    break ;

  }
}

function mouseReleased (){
  state = state +1;
  if (state >2) {
    state = 0;
  }
}



}
