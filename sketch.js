function setup() {
  createCanvas(480, 220);
}

function draw() {
    background(220);
    strokeWeight(2);
    /*for (i=10; i<410; i+=15) {
        line(i,0,i+i/2,100);
        fill(0);
        ellipse(i+i/2,100,5,5);
        line(i+i/2,100,i*1.2,220);
    }*/
    ellipse(width/2,height/2,30,30);
}
