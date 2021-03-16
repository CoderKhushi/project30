class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visiblity=255;
      }
        display()
        {
          if(ball.body.speed<3){
            Block.display()
             }
        
             else{
               push();
               var angle = this.body.angle;
               var pos= this.body.position;
               World.remove(world,this.body);
               translate(pos.x, pos.y);
               rotate(angle);
               this.visiblity=this.visiblity-10;
               tint(255,this.visiblity);
               rectMode(CENTER);
               rect(0,0,this.width, this.height);
               pop();
             
           }
    }
  }
