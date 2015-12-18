// list the illustration that i am going to use
var backhandImg;
var backgroundImg;
var bulletImg;
var fingerImg;
var fronthandImg;
var lowergunImg;
var uppergunImg;
var reloadSound;
var fireSound;
var reloadImg;
//place the bullet
var position = 400;


function preload() {
	backgroundImg = loadImage("images_1/background.png");
	backhandImg = loadImage("images_1/backhand.png");
	bulletImg = loadImage("images_1/bullet.png");
	fingerImg = loadImage("images_1/finger.png");
	fronthandImg = loadImage("images_1/fronthand.png");
	lowergunImg = loadImage("images_1/lowergun.png");
	uppergunImg = loadImage("images_1/uppergun.png");
	reloadImg = loadImage("images_1/RELOAD.png");
	reloadSound = loadSound('images_1/reload.mp3');
	fireSound = loadSound('images_1/fire.mp3');
}
//draw the canvas
function setup() {
	createCanvas(640, 480);
}

// 마우스를 뒤로 가져갈때 장전하는 소리를 들리게 하고
//http://www.soundjay.com/gun-sound-effect.html

//start drawing a day



function draw() {
	image(backgroundImg, 0, 0);
	image(backhandImg, 190, 250);
	image(lowergunImg, 40, 148);
	image(reloadImg, 400, 280);

	//give a attribute to bullet
	position = position + 3;
	if (mouseIsPressed) {
		position = 400;
	}
	if (mouseX > 205) {
		position = 400;
	}

	image(bulletImg, position, 130);

	//give a attribute to the upper gun
	if ((mouseX - 140) <= 45) {
		mouseX = 185;
	}

	if ((mouseX - 140) >= 90) {
		mouseX = 230;
	}

	if (mouseIsPressed) {
		image(uppergunImg, mouseX - 140, 91);
	} else {
		image(uppergunImg, 83, 91);
	}

	//give a attribute to the finger
	if (mouseX <= 190) {
		mouseX = 190;
	}

	if (mouseX >= 305) {
		mouseX = 295;
	}

	if (mouseIsPressed) {
		image(fingerImg, mouseX, 200);
	} else {
		image(fingerImg, 225, 200);
	}

	image(fronthandImg, 0, 200);
}
