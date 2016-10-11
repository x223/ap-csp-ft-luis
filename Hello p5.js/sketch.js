var xpos = 50;
var ypos = 75;
var xdir = 10;
var ydir = 1;

function setup() {
	createcanvas(windowWidth, windowHeight);
}

function draw () {
	background('#742FDC');
	noStroke();
	ellipse(xpos, ypos, 50, 50);
	triangle(0, windowHeight,xpos,ypos,windowWidth,windowHeight);
	xpos = xpos + xdir;
	ypos = ypos + ydir;
	// if xpos>= right edge  or xpos <= left edge
	if(xpos >= windowWidth || xpos <= 25) {
		xdir = xdir * -1; // Bounce
	}
	
}
	