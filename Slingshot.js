class Slingshot{ constructor(bodyA , bodyB){ 

    var options ={ bodyA:bodyA , bodyB:bodyB , stiffness:.04 , length:10} 
    this.slingshot = Constraint.create(options) 
    World.add(world,this.slingshot) } 

     display(){ 
         strokeWeight(4)
         line(this.slingshot.bodyA.position.x ,this.slingshot.bodyA.position.y ,  this.slingshot.bodyB.position.x ,this.slingshot.bodyB.position.y)

     }
    
    }
