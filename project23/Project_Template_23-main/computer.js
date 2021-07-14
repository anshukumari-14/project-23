class Computer{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        };

        this.image = loadImage("assets/base2.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        
        World.add(world,this.body)
            }
        
        show(){
            var pos = this.body.position;
            var angle = this.body.position;

           // Push();
            translate(pos.x,pos.y);
            rotate(angle);

            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
        //Pop();

    }
    

    }
