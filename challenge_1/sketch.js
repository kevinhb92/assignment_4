//give a array to location X and Y of flower
var locationX = [];
var locationY = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();

	// set up the condition for the location of the flower
	for (var i = 0; i < 30; i++) {
		locationX[i] = random(0, 640);
		locationY[i] = random(150, 480);
	}
}

function draw() {
	// clear the background with a color of sky
	background(104, 191, 248);

	//draw ground
	fill(49, 178, 59);
	rect(0, 250, 640, 480);

	//set the number of flower (stem part)
	for (var i = 0; i < 30; i++) {

		// stem of the flower
		fill(12, 119, 21);
		rect((locationX[i] - 3), locationY[i], 6, 120, 3);

		// outside flower bud for flower
		fill(12, 119, 21);
		ellipse(locationX[i], locationY[i], 20, 20);

		// inside flower bud for flower
		fill(96, 166, 102);
		ellipse(locationX[i], locationY[i], 16, 16);
	}
	// seperated stempart and leaf part to prevent from overlappaing

	//set the number of flower (leaf part)
	for (var i = 0; i < 30; i++) {
		// outside leaf for flower
		fill(255, 255, 255, 80);
		ellipse(locationX[i], locationY[i], 50, 50);

		// middle leaf for flower
		fill(255, 255, 255, 70);
		ellipse(locationX[i], locationY[i], 40, 40);

		// inside leaf for flower
		fill(255, 255, 255, 60);
		ellipse(locationX[i], locationY[i], 30, 30);

	}
}
