class slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
       this.sling.bodyA = null; 
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var anchorA = this.sling.bodyA.position;
            var anchorB = this.sling.pointB;
            strokeWeight(4);
            line(anchorA.x, anchorA.y, anchorB.x, anchorB.y);
        }  
    }
}