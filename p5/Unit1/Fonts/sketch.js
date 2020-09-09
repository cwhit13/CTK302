var f;
var f2;

function setup() {
  createCanvas(1600, 1600);
  f = loadFont("Assets/AlfaSlabOne-Regular.ttf");
    f2 = loadFont("Assets/cinzel.ttf");
  textAlign(CENTER);
}

function draw() {
  background(100);
  textFont(f);
  textSize(68);
  text("Hello Darkness My Old Friend", width / 2, height / 2);
  textFont(f2);
  textSize(100);
  text("I've come to talk to you", width / 2, height / 2 +80);
}
