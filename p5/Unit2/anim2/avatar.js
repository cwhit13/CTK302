
function avatar () {
  push();
    fill(27, 50, 250);
    noStroke();
    rect(1, 1500, 1600, 600);
    fill(27, 50, 250);
    rect(1, 1200, 1600, 900);
    fill(27, 50, 250);
    rect(1, 200, 1600, 1200);

    fill(255, 219, 191);
    rect(600, 700, 100, 200);
    //body
    fill(255, 219, 191);
    rect(570, 700, 20, 220);
    fill(255, 219, 191);
    rect(710, 700, 20, 220);
    //arms
    fill("violet");
    ellipse(650, 607, 120, 100);
    //hair for top of head
    fill(255, 219, 191);
    ellipse(650, 650, 100, 100);
    //head
    fill("violet");
    rect(590, 607, 30, 260);
    fill("violet");
    rect(680, 607, 30, 260);
    //hair


    fill(255, 255, 255);
    ellipse(670, 640, 20, 20);
    fill(255, 255, 255);
    ellipse(630, 640, 20, 20);
    fill(0, 0, 0);
    ellipse(630, 640, 10, 10);
    fill("red");
    ellipse(650, 675, 30, 10);

    //
    //fill(43, 60, 64);
    //rect(760, 700, 10, 100);
    fill(43, 60, 64);
    triangle(720, 900, 760, 750, 876, 528);
    //spear
    if (mouseIsPressed) {
      fill(229, 252, 76);
      triangle(910, 460, 910, 400, 876, 520);
      fill(229, 252, 76);
      triangle(916, 367, 951, 347, 876, 520);
    } else {
      fill(27, 50, 250);
      triangle(910, 460, 910, 400, 876, 520);
      fill(27, 50, 250);
      triangle(916, 367, 951, 347, 876, 520);
    }


    fill(20, 245, 113);
    rect(600, 900, 100, 300);
    //tail
    fill(20, 245, 113);
    ellipse(620, 1290, 100, 240);
    fill(20, 245, 113);
    ellipse(685, 1280, 100, 220);
    fill(20, 245, 113);
    ellipse(685, 1280, 100, 220);
    //eyes below
    fill(0, 0, 0);
    ellipse(670, 640, 10, 10);
    pop();
  }
}
