var bgColor = 'white';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  text(mouseX + ","+ mouseY, 10 ,10);
	fill('black');
  rect(450,360,70,140);
	fill('grey');
	rect(475,500,20,200);
	ellipse(485,475,35,35);
	ellipse(485,430,35,35);
	ellipse(485,385,35,35);
    // fill(bgColor);
    // ellipse(250,250,mouseY,mouseY)
  if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#6638F0';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#890424';
  } else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#20C8B6';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#82BCFB';
  } else {
    bgColor = '#E12874';
  }
}