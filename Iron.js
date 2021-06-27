class iron{
	constructor(x,y)
	{
		var options={
			restitution:0.5,
			friction:1,
			density:15
		}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, 100, 50, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle = this.body.angle;	
			push()
			translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0,0,100,50);
			pop()
	}

}