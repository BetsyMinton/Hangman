function setup() {
  createCanvas(480,120);
  fill(0,102);
  noStroke();
}

function draw() {
    background(204);
    ellipse(mouseX,mouseY,9,9);
    print(mouseX,mouseY);
    document.getElementById("hor").innerHTML = mouseX;
    document.getElementById("vert").innerHTML = Math.floor(mouseY);
}
