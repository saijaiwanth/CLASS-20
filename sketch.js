const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 var engine , world , body ;
function setup(){
  createCanvas(400,400)
  //create engine 
  engine=Engine.create(); 
  world=engine.world;
  var options = {
    isStatic:false
  }
  body = Bodies.rectangle(100,100,50,50,options);
  World.add(world,body);
  var options2 = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,10,options2);
  World.add(world,ground);
  console.log(body);
}
function draw (){
  background("black");
 Engine.update(engine);
 rect(body.position.x,body.position.y,50,50);
 rect(ground.position.x,ground.position.y,400,10);
}

  

