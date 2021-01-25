const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3;
var box4,box5,box6;
var ground;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,700,20);

    //box1 = new Box

}

function draw(){

    Engine.update(engine);

    ground.display();


   
}

