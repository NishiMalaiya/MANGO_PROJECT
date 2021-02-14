class Stone{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction : 0.9
			}
		this.x=x;
		this.y=y;
		this.r=10;
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, 30, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,40,55);
		pop()
 }
}