function setup(){
  createCanvas(500,500);
  background(233);
}

function draw(){
	background(233);
  stroke("#8AB69A");
  noFill();

  rotation();

    push();
    translate(391,105);
    strokeWeight(1.5);
    scale(0.57);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(168.5,166);
    strokeWeight(2);
    scale(0.326);
    rotation();
    pop();

    push();
    translate(296,201);
    strokeWeight(4);
    scale(0.185);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(224,221.5);
    strokeWeight(7);
    scale(0.102);
    rotation();
    pop();

    push();
    translate(263.5,233);
    strokeWeight(10);
    scale(0.055);
    rotate(radians(90));
    rotation();
    pop();

    push();
    translate(243,240);
    strokeWeight(25);
    scale(0.028);
    rotation();
    pop();

    push();
    translate(253,244.5);
    strokeWeight(30);
    scale(0.01);
    rotate(radians(90));
    rotation();
    pop();

    //je savais pas faire de polygon sans que ce soit trop compliqué
    push();
    var distance = dist(mouseX, mouseY, 250, 250);
    if (distance < 200) {
      line(90,339,170,200);
      line(410,339,302,155);
      line(170,200,248,62);
      line(302,155,249,62);
      line(90.5,340,248,340);
      line(410,339,248,340);
    }
    else {
    line(90,339,90,155);
    line(410,339,410,155);
    line(90,155,248,62);
    line(410,155,249,62);
    line(90.5,340,248,432);
    line(410,339,248,432);
    }
    pop();

  }


// function motif(){ //le 1er motif, triangle équilatéral
//     triangle(90,340,249,63,410,340);//le premier triangle du pattern
//
//     translate(391,105);
//     rotate(radians(90));
//     triangle(90/1.75,340/1.75,249/1.75,63/1.75,410/1.75,340/1.75);//le second triangle du pattern à l'interieur du premier

// triangle(taille/2,taille*1.5,taille*1.25,taille/4,taille*2,taille*1.5)

// }

  function rotation(){

    push();
    var distance = dist(mouseX, mouseY, 200, 200);
    if (distance < 150) {
    rotate(radians(frameCount));
    }
    triangle(90,340,249,63,410,340);
    pop();


    push();
    var distance = dist(mouseX, mouseY, 250, 250);
    if (distance < 50) {
    rotate(radians(frameCount));
    }
    line(248.5,63,249,185);
    line(408,338.5,302,277);
    line(90,340,196,277);
    pop()

    push();
    var distance = dist(mouseX, mouseY, 200, 250);
    if (distance < 50) {
    rotate(radians(frameCount));
    }
    line(197,339,143,247);
    line(302,339,355,247);
    line(197,155,302,155);
    pop();
}
