const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(width/2-40,320,70,70);
    box2 = new Box(width/2-40,320,70,70);
    //ply = new Box(width/2+45,300,150,50);
    pig = new Pig(width/2-40,300);

    ground = new Ground(width/2,400,width,20);
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig.display();
}