var img1;
let state = 0;
let song1;
var mic;
var vol;
var c = 'purple';

function preload() {
  song1 = loadSound("assets/carl.mp3");
  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  //song1 = loadSound("assets/carl.mp3")
  img1 = loadImage("assets/img1.png")
  imageMode(CENTER);

}

function draw() {
  background(c);



  // get the sound input
  vol = (mic.getLevel()).toFixed(3); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .01) { // if the volume is LOUD?
    // do something
    //  c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }
  // extra stuff for debugging
  textSize(18);
  //text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


  switch (state) {

    case 0:
      background('purple')
      textSize(70);
      fill("white");
      text("Greetings and Salutations \nPlease click on screen to begin.", 100, 300);
      break;

    case 1:
      background("blue");
      image(img1, 500, 400, 612, 792);
      textSize(20);
      text("My name is Rex Morgan. If you yell, I will disappear.", 200, 50);
      if (vol > .08) {
        state = 2;
      }
      break;

    case 2:
    background('purple');
      text("Wanna hear my favorite song? \n Click on screen to play song", 200, 50);
      break;

    case 3:
      song1.play();
      state = 4;
      break;

    case 4:
      background('purple');
      image(img1, 500, 400, 612, 792);
      text("Isn't this a bop?", 200, 50);
      break;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
    song1.pause();
  }
}

// Code Freeze was originally 10/4 at 9pm. but you know how it be. Rex Morgan is the actor who plays Henry Higgins in My Fair Lady. What is his coorelation to a hippo? That is for the viewer to decide.
