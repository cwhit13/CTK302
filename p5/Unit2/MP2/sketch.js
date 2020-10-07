var img1;
function setup() {
  createCanvas(windowWidth, windowHeight);

  img1= loadImage("assets/img1.png")
  imageMode (CENTER);
}

function draw() {
  background (800);

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
