function setup() {
	createCanvas(500,500)
	startX = 100
	stopX = 500
	background(255,255,255);

	a = new Vehicle(createVector(115, height));
	b = new Vehicle(createVector(35, height));
	c = new Vehicle(createVector(35, height));
	d = new Vehicle(createVector(35, height));
	e = new Vehicle(createVector(35, height));
	f = new Vehicle(createVector(35, height));
	g = new Vehicle(createVector(35, height));
	h = new Vehicle(createVector(35, height));
	j = new Vehicle(createVector(35, height));
	k = new Vehicle(createVector(35, height));
}

function draw(){
	background(255);

	displayChart();
	a.seek(createVector(115, 40));
	a.update();
	a.display();
	b.seek(createVector(36, 9));
	b.update();
	b.display();
	c.seek(createVector(36, 26));
	c.update();
	c.display();
	d.seek(createVector(36, 82));
	d.update();
	d.display();
	e.seek(createVector(36,3));
	e.update();
	e.display();
	f.seek(createVector(36, 14));
	f.update();
	f.display();
	g.seek(createVector(36,3));
	g.update();
	g.display();
	h.seek(createVector(36,6));
	h.update();
	h.display();
	j.seek(createVector(36,1));
	j.update();
	j.display();
	k.seek(createVector(36,1));
	k.update();
	k.display();

}

function displayChart() {

	for (var i = 1; i < 12; i++ ) {
		line(startX,i*20,stopX,i*20)
	}

	textSize(15);
	fill(0);
	text('Top Ten States with Most Vehichular Fatalities 2016', 110, 350);
	fill(0, 102, 153);
	fill(255,0,0)
	text('STATES', 250, 300);
	text('D', 30, 60);
	text('E', 30, 75);
	text('A', 30, 90);
	text('T', 30, 105);
	text('H', 30, 120);
	text('S', 30, 135);

	fill(0, 102, 153);
	text('4000', 60, 25);
	text('3600', 60, 45);
	fill(0, 102, 153, 51);
	text('3200', 60, 65);
	text('2800', 60, 85);
	fill(0, 102, 153);
	text('2400', 60, 105);
	fill(0, 102, 153, 51);
	text('2000', 60, 125);
	text('1600', 60, 145);
	fill(0, 102, 153);
	text('1200', 60, 165);
	fill(0, 102, 153, 51);
	text('800', 65, 185);
	text('400', 65, 205);
	text('0', 81.5, 225);
	text('T', 115, 245);
	text('X', 115, 260);
	text('C', 150, 245);
	text('A', 150, 260);
	text('F', 185, 245);
	text('L', 185, 260);
	text('G', 220, 245);
	text('A', 220, 260);
	text('N', 255, 245);
	text('C', 255, 260);
	text('P', 290, 245);
	text('A', 290, 260);
	text('O', 325, 245);
	text('H', 325, 260);
	text('I', 360, 245);
	text('L', 360, 260);
	text('M', 391.5, 245);
	text('I', 395, 260);
	text('T', 431.5, 245);  
	text('N', 430, 260);
}

class Vehicle {
	constructor(position){
		this.position = position;
		this.velocity = createVector(0,0);
		this.acceleration = createVector(0,0);
		this.r = 6;
		this.color = color (249, 209, 255);
		this.maxSpeed = 5;
	}

	seek(target) {
		let desired = target.sub(this.position);

		desired.setMag(this.maxSpeed);
  //this line of code above that is commented out is what I need help fixing

  let steer = desired.sub(this.velocity);

  this.applyForce(steer);
}


applyForce(force) {
	this.acceleration.add(force);

}


update(){
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
	this.acceleration.mult(0);
}

display() {

	fill(this.color);
	stroke(0);
	strokeWeight(1);
	translate(this.position.x, this.position.y);
	beginShape();
	vertex(0, -this.r*2);
	vertex(-this.r, this.r*2)
	vertex(this.r, this.r*2);
	endShape(CLOSE);     




}
}