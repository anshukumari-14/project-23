class Playerbase{
    constructor(x,y,width,height){
        var playerbase_options={
            isStatic:true
        };


        this.image = loadImage("assets/player.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,playerbase_options);
        
        World.add(world,this.body)
            }
        
        saw(){
        
            var pos = this.body.position;
            var angle = this.body.position;
        
            push();
            translate(pos.x,pos.y);
            rotate(angle);
        
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
           pop();
        
        }
        }