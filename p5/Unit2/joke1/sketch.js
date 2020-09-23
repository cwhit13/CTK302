let state = 0;
let timer = 0;


function setup() {
  createCanvas(500, 500);
  textSize(32)
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      text("How many tickles does it take to make an octopus laugh?", 250, 250, 400, 400);

      timer = timer + 1;
      if (timer > 5 * 60){
        state = 1;
      timer = 0;
}
      break;

      case 1:
      background ('blue');
      text ("Ten tickles!", 250, 250, 400, 400);
      break;
  }
}
