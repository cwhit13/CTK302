var bubbles = [];
var bg;
var f;
function setup() {
  //f = loadFont ("assets/font.ttf");
  //textFont (f, 20);

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '14v3KeduRlg7G-IoupkZiiJMLmV6GtmQz8pBsK9SlTFs'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows

  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
bg = loadImage("assets/rap.jpg");
f = loadFont("assets/font.ttf");
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Rap, data[i].Grunge, data[i].Revolution )); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('purple');
  image(bg, width/2, height/2, width, height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();

  }

}


// my Bubble class
class Bubble {

  constructor(myName, myRap, myGrunge, myRevolution) {
    this.name = myName;
    this.rap = myRap;
    this.grunge = myGrunge;
    this.revolution = myRevolution;
    this.pos = createVector(random(width), random(height));
this.vel = random (1, 5);
  }


  display() {
  //  if (this.shape == "Square") {
  //    rect(this.pos.x, this.pos.y, 50, 50);
  //  } else {
  //    ellipse(this.pos.x, this.pos.y, 50, 50);
//    }
//image (this.pos.x, this.pos.y, cake);
fill("yellow");
ellipse(this.pos.x, this.pos.y, 80, 80);

  fill("black");
    text(this.name, this.pos.x, this.pos.y);
    text(this.rap, this.pos.x, this.pos.y-16);
    text(this.grunge, this.pos.x, this.pos.y+16);
      text(this.revolution, this.pos.x, this.pos.y+32);
  }

drive() {
  this.pos.x +=5;
  if (this.pos.x > width) this.pos.x = 0;
}
}
