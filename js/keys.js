//// KEYS.JS
// - defines key object and event listeners.

var key = {
	left: false,
	up: false,
	right: false,
	down: false
};

window.addEventListener("keydown", function(event) {
	switch(event.which || event.keyCode) {
		case 37: key.left = true; break;
		case 38: key.up = true; break;
		case 39: key.right = true; break;
		case 40: key.down = true; break;
	}
});

window.addEventListener("keyup", function(event) {
	switch(event.which || event.keyCode) {
		case 37: key.left = false; break;
		case 38: key.up = false; break;
		case 39: key.right = false; break;
		case 40: key.down = false; break;
	}
});
