class box{
    constructor(x,y,width,height){
        var options = {
           // 'restitution':0.8,
            //'friction':1.0,
           // 'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.color = color(rgb(random(0,255),random(0,255),random(0,255)));
        this.image = loadImage("block.png");
        this.Visibility = 255;
        World.add(world, this.body);
        
    }
display(){
push();
translate(this.body.position.x, this.body.position.y);
if(this.body.speed<3){
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);;
}
else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility-5;
    tint(255,this.Visibility);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}
//rectMode(CENTER);
//fill(this.color);
//rect(0,0, this.width, this.height);
pop();
 }
}
    