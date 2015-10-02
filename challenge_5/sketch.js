//the point where you clicked should be starting point
var clickedX = 0;
var clickedY = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 480);

}

function draw() {
	// clear the background
	background(50, 10, 10);
	strokeWeight(10);

	//when mouse is unpressed there is going to be a next starting position
	if (!mouseIsPressed) {
		clickedX = mouseX;
		clickedY = mouseY;

		//when mouse is pressed it should make a line that starts from where
		//it has clicked to the current mouse location
	} else {
		fill(0, 100, 255);
		stroke(255, 255, 255);
		line(clickedX, clickedY, mouseX, mouseY);
	}

	//when mouse is pressed circle should stay where its been clicked
	if (mouseIsPressed) {
		fill(0, 100, 255);
		stroke(255, 255, 255);
		ellipse(clickedX, clickedY, 45, 45);
	}

	fill(0, 100, 255);
	stroke(255, 255, 255);

	// one circle should always follow the cursor
	ellipse(mouseX, mouseY, 45, 45);
}
