class Paper{


constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.radius = r
this.body = Bodies.circle(x, y, r, options);
World.add(world, this.body);
}

display(){
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
