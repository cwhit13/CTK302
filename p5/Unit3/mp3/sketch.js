let cars = []
let f1, f2, f3;
let bg ;
let fonts = [];
let maxCars = 5 ;
function setup() {
  createCanvas(windowWidth, windowHeight);
  f1= loadFont("assets/friday13.ttf");
  f2=loadFont("assets/doublefeature.ttf");
  f3=loadFont("assets/anotherdanger.otf");

  bg = loadImage("assets/fall.jpg");

fonts = [f1, f2, f3];

  //spawn objects
for(let i=0; i<maxCars; i++) {
  cars.push(new Car());
}
}

function draw() {
  background(100);
  image(bg, 0, 0, width, height);
  // display and move 20 objects
  for(let i=0; i<cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

}
// Car class
class Car {

  //constructor and attributes
  constructor() {
  this.pos = createVector (100, 100);
  this.vel = createVector (random(-3, 3), random(-3, 3));
  this.size = random (60, 180);
  this.c=color(random(150, 200), random(50), random(50));
let b = floor(random(3));
  this.font= fonts[b];

  }


// methods

display () {
  //rect(this.pos.x, this.pos.y, 50, 25);
  fill(this.c);
  textFont(this.font);
  textSize(this.size);
  text("ACAB", this.pos.x, this.pos.y);
}

move() {
  this.pos.add(this.vel);
  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;
}
}
