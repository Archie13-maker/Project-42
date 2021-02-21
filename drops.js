class Drops{
    constructor(x,y){
    var options={
      
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.body=Bodies.circle(x,y,7,options)
    this.radius=7;
    World.add(world, this.body);
    }

    updateDrops(){
        if(this.body.position.y>700){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var pos=this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
        
        } 
}