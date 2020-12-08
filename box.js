class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,
          friction:0.1,
         
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
      this.Visiblity=255;
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        pop();
        }
   

      
    }
  }