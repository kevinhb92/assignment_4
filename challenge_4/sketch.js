//give a array to location X,Y, and ballSize
var ballpositionX = [];
var ballpositionY = [];
var ballSize = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();

	//sometimes there are many circles and sometimes there are fewer
	//set up the number of circles (random)
	for (var i = 0; i < random(40, 80); i++) {
		ballpositionX[i] = random(0, 640);
		ballpositionY[i] = random(0, 480);
	}
	//set up the size of circles (random)
	for (var i = 0; i < random(40, 80); i++) {
		ballSize[i] = random(3, 35);
	}
}

function draw() {
	// clear the background
	background(150, 0, 0);

	//give a condition that circle moves around on the spot
	for (var i = 0; i < random(40, 80); i++) {
		ballpositionX[i] = ballpositionX[i] + random(-6, 6);
		ballpositionY[i] = ballpositionY[i] + random(-6, 6);

		//choose the color for the circle
		fill(100, 250, 250);

		//draw the circle
		ellipse(ballpositionX[i], ballpositionY[i], ballSize[i], ballSize[i]);
	}
}
