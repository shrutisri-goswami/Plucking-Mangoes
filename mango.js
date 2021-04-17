class Mango{
      constructor(x,y,width,height) {
          var options = {
            isStatic: true,
            restitution:0,
            friction:1
          }
          this.image= loadImage('images/mango.png');
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y, 50,50);
        }
  }
