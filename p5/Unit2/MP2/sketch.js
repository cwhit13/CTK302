var img1;
function setup() {
  createCanvas(windowWidth, windowHeight);

  img1= loadImage("assets/img1.png")
  imageMode (CENTER);
}

function draw() {
  background (800);

  image(img1, width/2, height/2, 400, 400);

}
