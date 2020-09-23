let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {


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
//make sure functions aren't inside each other!
