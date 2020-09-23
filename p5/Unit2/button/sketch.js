let myState = 0 ;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (myState) {
    case 0:
    background ('grey');
    text ("case 0", 250, 250 );
    break;

    case 1:
    background ('pink');
    text ('case 1', 250, 250);
    break;
  }
rect (100, 100, 200, 100);

}

function mouseReleased() {
  myState++
  if (myState> 1) {
    myState = 0;
  }

  if ((mouseX > 10) && (mouseX < 60) && (mouseY> 10) && (mouseY < 35)) {
    myState++;
    if (myState > 1) {
      myState = 0;
    }
  }
}
