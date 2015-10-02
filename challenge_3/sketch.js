function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	// clear the background
	background(90, 90, 110);

	// draw a square boarder
	fill(0, 0, 0);
	rect(45, 45, 200, 395);

	//give a out of bound limit for red X
	//right
	if (mouseX >= 240) {
		mouseX = 240;
	}
	//bottom
	if (mouseY >= 435) {
		mouseY = 435;
	}
	//left
	if (mouseX <= 45) {
		mouseX = 45;
	}
	//top
	if (mouseY <= 45) {
		mouseY = 45;
	}

	//draw a crossed X shaped line
	stroke(200, 50, 50);
	strokeWeight(20);
	line(mouseX - 40, mouseY - 40, mouseX + 40, mouseY + 40, 3);
	line(mouseX - 40, mouseY + 40, mouseX + 40, mouseY - 40, 3);

}
