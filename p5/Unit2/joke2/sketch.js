let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
    background ('purple');
    text("This graveyard looks overcrowded", 250, 250);
    break ;

    case 1:
    background ('orange');
    text("People must be dying to get in", 250, 250);
    break;
  }
}

function mouseRelease() {
  state++

  if (state > 1) {
    state = 0;
  }
}
