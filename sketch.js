//Create variables here
var dog, happyDog, database, food, foodStock;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyImg = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = creatSprite(250,250,100,100);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);

  if(food!==undefined){

  if (keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyImg);
  }
}

  drawSprites();
  
  

}

function readStock(data){
  food = data.val();

}

function writeStock(x){

  if (x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



