let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  switch (state) {

    case 0:
    background ('red');
    text ("This is Halloween", 250, 250);
    timer= timer + 1
    if (timer >200){
      state = 1;
      timer = 0; 
    }
      break;
    case 1:
    background ('purple');
    text ("I love pumpkins", 250, 250);
      break;
  }
}
