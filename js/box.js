////BOX.JS
// - A generic box object used for 
//   testing game mechanics.
//   Made with Object.create();

var Box = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	color: "black",
	disp: 5, // displacement
	
	init: function(x_, y_, w, h, c) {
		this.x = x_ || 0;
		this.y = y_ || 0;
		this.width  = w || 50;
		this.height = h || 50;
		this.color  = c || "white";
	},
	
	setXY: function(dx, dy) {this.x = dx; this.y = dy;},
	setWH: function(dw, dh) {this.width = dw; this.height = dh},
	
	// constrains object movement speed to 0..100
	setDisp: function(dd) {
		if(dd < 0) {dd = 0;}
		if(dd > this.width) {dd = this.width;}
		this.disp = dd;
	},
	
	draw: function() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	},
	
	move: function(dir) {
		if(dir === "left")  {this.x += Math.abs(this.disp);}
		if(dir === "up")    {this.y += Math.abs(this.disp);}
		if(dir === "right") {this.x -= Math.abs(this.disp);}
		if(dir === "down")  {this.y -= Math.abs(this.disp);}
		/* return (this !== window) ? this : window; */
	},
	
	// prevents `this` from moving outside obj
	constrainTo: function(obj) {
		if(obj.x > this.x) { // stop at left edge.
			obj.x = this.x;}
		if(obj.y > this.y) { // stop at top edge.
			obj.y = this.y;}
		if(obj.x + obj.width < this.x + this.width) { // right edge.
			obj.x = this.x + this.width - obj.width;}
		if(obj.y + obj.height < this.y + this.height) { // bottom edge.
			obj.y = this.y + this.height - obj.height;
		}
		
	}
};

