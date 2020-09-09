var f;

function setup() {
  createCanvas(800, 800);
  f = loadFont("Assets/AlfaSlabOne-Regular.ttf");
  textAlign(CENTER);
}

function draw() {
  background(100);
  textFont(f);
  textSize(68);
  text("Hello Darkness My Old Friend", width / 2, height / 2);
}
