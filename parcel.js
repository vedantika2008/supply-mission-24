class Package{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height = height;
        World .add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push ()
       Matter .body. translate(packageBody,{x:-20,y:0})
        rotate (angle);
        rectMode (CENTER);
        rect (0,0,this.width,this.height);

        Pop ();
    }
}

