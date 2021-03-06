// ball: a data object to hold info about the ball
var ball = {
	x: 500,
	y: 100,
	speedX: 5,
	speedY: 5,
	radius: 25
};


// paddle: a data object to hold info about the ball
var paddle = {
	x: 0,
	y: 350,
	width: 300,
	height: 30,
};


// setup: called by p5 once at startup
function setup() {
	createCanvas(640, 480);
	noStroke();
}


// draw: called by p5 repeatedly to draw the game
function draw() {

	//////////////////////////////
	// added a brequet

	updateBall();
	paddle.x = mouseX;


	//////////////////////////////
	// changed circle to ellipse, square to rect

	background(50, 50, 50);
	ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
	rect(paddle.x - paddle.width * 0.5, paddle.y, paddle.width, paddle.height);

}


// updateBall: move the ball, then detect and respond to collisions
function updateBall() {
	// change position
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;


	// don't let the ball go through the walls

	// right
	if (ball.x > width - ball.radius) {
		ball.speedX = -ball.speedX;
	}

	// left
	if (ball.x < 0 + ball.radius) {
		ball.speedX = -ball.speedX;
	}
	// made the ball not to exceed the bottom
	if (ball.y > height + (ball.radius - 25)) {
		ball.speedY = -ball.speedY;
	}

	// top
	if (ball.y < 0 + ball.radius) {
		ball.speedY = -ball.speedY;
	}

	// check for a *collision* between the ball and the paddle
	// look up the && operator
	//'&&' means 'and' in javascript

	if (ball.x > (paddle.x - paddle.width * 0.5) && ball.x < (paddle.x + paddle.width *
			0.5) && ball.y > paddle.y - ball.radius) {
		if (ball.speedY > 0) {
			ball.speedY = -ball.speedY;
		}
	}
}
