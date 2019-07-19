

function setup() {
  createCanvas(300,400);
  fill(0);
  noStroke();
}

function draw() {
    background(205);
    ellipse(mouseX,mouseY,9,9);
    print(mouseX,mouseY);
    document.getElementById("hor").innerHTML = mouseX;
    document.getElementById("vert").innerHTML = Math.floor(mouseY);
    text(answerArray, 150, 10);
}
