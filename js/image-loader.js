//// IMAGE-LOADER.JS
// - handles preloading of images.

function imagePreload(path) {
	var loaded = false;
	var img = new Image();
	img.onload = function() {
		loaded = true;
	};
	img.src = path;
	return img;
}

/* 
Example usage:

var img = new imagePreload("sprite.png");
*/
