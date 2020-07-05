//Create variables here
var dog,dogi
var happyDog,dogi2
var database; 
var foodS, foodStock;
function preload()
{
  dogi = loadImage("images/dogImg.png");
  dogi2 = loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  database=firebase.database();
  //console.log(database);
  createCanvas(500, 500);
  //dog = createSprite(250,250,30,40);
  happydog = createSprite(250,250,30,40);
   happydog.addImage("images",dogi)
   happydog.scale= 0.25
   //happydog.addImage("img",dogi2)
  //foodS = createSprite(200,250,20,30);
  foodStock = database.ref('Food')
  foodStock.on("value",readstock)
}


function draw() {  
 background(46, 139, 87)
 if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  happyDog.addImage("img",dogi2)
 }
  drawSprites();
  //add styles here
  textSize(15);
  fill("white");
  stroke("white");
   text("Note:Press Up Arrow key to Feed Drago Milk!!",70,50);
   text("Food Remaining:"+ foodS,70,70)
 
}
function readstock(data){
 foodS= data.val();
}
function writestock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
 database.ref('/').update({
   Food:x
 })
}



