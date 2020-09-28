let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);


  push();
  translate(x, 0);
  //text ("This is Halloween", x, 250);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
  pop();


}
