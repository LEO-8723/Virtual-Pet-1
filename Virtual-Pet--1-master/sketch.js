var dog,dogImg, happyDog, database, foodS, foodStock,database;

function preload()
{
	dogImg = loadAnimation("Dog.png");
  happyDog=loadAnimation("happydog.png");

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10);
  dog.addAnimation("dog1",dogImg);
dog.scale=0.3;
foodStock=database.ref('food');
foodStock.on("value",readStock)

}


function draw() {  
  background("green");
  dog.display();
  if (keyWentDown(UP_ARROW)){
writeStock(foodS);
 dog.addAnimation("goodDog",happyDog)
 dog.scale = 0.3;
  }
  drawSprites();
  textSize(20);
  text("Use Up Arrow to Feed The Dog",100,100);

  //add styles here

}

function readStock(data){
foodS=data.val();
}
function writeStock(x) {
  if(x<0){
    x=0;
  
}
//else{
 //x=x-1;
//}
database.ref("/").update({
  Food:x
})
}
