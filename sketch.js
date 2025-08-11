var d;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220,100,50);
}

function draw() {
  d = random(50,100)
  fill(255,random(55,200));
  ellipse(mouseX, mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
 