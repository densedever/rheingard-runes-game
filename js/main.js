//// MAIN.JS
// - Main game script.

var m = Object.create(Box); // map
var p = Object.create(Box); // player

function init() {
	p.init(
		(canvas.width/2) - 5, 
		(canvas.height/2) - 5,
		50, 50,
		"blue"
	);
	
	m.init(
		p.x, p.y, // map will always init under player.
		500, 500, 
		"white"
	);
	m.setDisp(8);
}

function update() {
	if(key.left)  {m.move('left');}
	if(key.up)    {m.move('up');}
	if(key.right) {m.move('right');}
	if(key.down)  {m.move('down');}
	p.constrainTo(m);
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	m.draw();
	p.draw();
}

function main() {
	requestAnimationFrame(main, canvas);
	update();
	draw();
}

window.onload = function() {
	init();
	main();
};

