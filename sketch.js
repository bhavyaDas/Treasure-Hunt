
//Created  variables named roadImage,road
var roadImage, road;

//Created  variables named runnerImage,runner
var runnerImage, runner;

//Created  variablesnamed boyImage,boy
var boyImage, boy;

//Created  variables named cashImage,cash
var cashImage, cash;

//Created a variable named gameOverImage,gameOver
var gameOverImage, gameOver

//Created a variables named jwellImage,jwell
var jwellImage, jwell;

//Created a variables named diamondsImage,diamonds
var diamondsImage, diamonds;

//Created variables named swordImage,sword
var swordImage, sword

//Created a variable named treasureCollection
var treasureCollection

/*Created  variables named swordGroup,cashGroup,diamondsGroup,jwellGroup*/
var swordGroup, cashGroup, diamondsGroup, jwellGroup

//Created a variable named PLAY and set it's value as 1
var PLAY = 1

//Created a variable named END and set it's value as 0
var END = 0

/*Created a variable named SERVE and set it's value as 2*/
var SERVE = 2

/*Created  variables named treasureHuntImage, treasureHunt*/
var treasureHuntImage, treasureHunt

/*Created a variable named gameState and set it's value as SERVE*/
var gameState = SERVE

// Images Storage
function preload() {

  /*Loaded a image ("Road.png") inside variable
  roadImage*/
  roadImage = loadImage("Road.png")

  /*Loaded a animation ("Runner-1.png",Runner-2.png) inside variable runnerImage*/
  runnerImage = loadAnimation("Runner-1.png", "Runner-2.png")

  //Loaded a image ("Runner-1.png") inside variable boyImage
  boyImage = loadImage("Runner-1.png")

  //Loaded a image ("cash.png") inside variable cashImage  
  cashImage = loadImage("cash.png")

  //Loaded a image ("jwell.png") inside variable jwellImage   
  jwellImage = loadImage("jwell.png")

  /*Loaded a image ("diamonds.png") inside variable diamondsImage*/
  diamondsImage = loadImage("diamonds.png")

  //Loaded a image ("sword.png") inside variable swordImage  
  swordImage = loadImage("sword.png")

  //Loaded a image ("game over treasure hnut.png") inside variable gameOverImage
  gameOverImage = loadImage("game over treasure hnut.png")

  //Loaded a image ("treasurehuntTitle.png") inside variable treasureHuntImage
  treasureHuntImage = loadImage("treasurehuntTitle.png")

}

//Pre-defined function named (setup)
function setup() {

  /*
  Created the drawing space (canvas) 
  Canvas's width=400
  Canvas's height=600
  */
  createCanvas(400, 600);

  //Created a sprite named(road) with (x,y,w,h)
  road = createSprite(200, 200, 200, 100)

  //Added a image to the sprite road that is("road",roadImage)
  road.addImage("road", roadImage)

  //Set the velocity Y of road as 4
  road.velocityY = 4

  //Created a sprite named(runner) with (x,y,w,h)
  runner = createSprite(200, 550, 200, 200)

  //Added a image to the sprite runner that is("player",runnerImage)  
  runner.addAnimation("player", runnerImage)

  //Reset the size of the runner as 0.07 through scale property
  runner.scale = 0.07

  //Created a sprite named(gameOver) with (x,y,w,h)
  gameOver = createSprite(200, 300, 50, 50)

  //Added a image to the sprite gameOver that is("gameOverScreen",gameOverImage)  
  gameOver.addImage("gameOverScreen", gameOverImage)

  //Reset the size of the gameOver as 0.5 through scale property 
  gameOver.scale = 0.5

  //Set the visiblity of gameOver as false
  gameOver.visible = false

  //Created a sprite named(treasureHunt) with (x,y,w,h)  
  treasureHunt = createSprite(200, 100, 50, 50)

  //Added a image to the sprite treasureHunt that is("StartOverScreen",treasureHuntImage)   
  treasureHunt.addImage("StartOverScreen", treasureHuntImage)

  //Reset the size of the gameOver as 1 through scale property   
  treasureHunt.scale = 1

  //Set the visiblity of gameOver as true
  treasureHunt.visible = true

  //Set the value of the variable treasureCollection as 0
  treasureCollection = 0

  //Created a new Group - (swordGroup)
  swordGroup = new Group()

  //Created a new Group - (cashGroup)  
  cashGroup = new Group()

  //Created a new Group - (diamondsGroup)
  diamondsGroup = new Group()

  //Created a new Group - (jwellGroup)
  jwellGroup = new Group()

}

//Pre-defined function which functions to repeat 
function draw() {

  //Set the background color of the canvas as black
  background(0)

  //Put a condition if road's y position is greater than 400
  if (road.y > 400) {

    //Set the road's y position as equal to making infinite screen
    road.y = height / 2

  }

  //Put a condition if gameState is equal to PLAY
  if (gameState == PLAY) {

    //Set the visiblity of the runner as true
    runner.visible = true

    //Set the runner's X position as mouseX
    runner.x = mouseX

    //Put a customizable function named-(cash_win)
    cash_win()

    //Put a customizable function named-(diamonds_win)    
    diamonds_win()

    //Put a customizable function named-(jwell_win)
    jwell_win()

    //Put a customizable function named-(sword_lose)
    sword_lose()

    //Put a condition if runner is touching (cashGroup)
    if (runner.isTouching(cashGroup)) {

      //If this is true then cashGroup will destroy
      cashGroup.destroyEach()

      //Increasing the score then by 50 each time
      treasureCollection = treasureCollection + 50

    }

    //Put a condition if runner is touching (diamondsGroup)
    if (runner.isTouching(diamondsGroup)) {

      //If this is true then diamondsGroup will destroy   
      diamondsGroup.destroyEach()

      //Increasing the score then by 150 each time  
      treasureCollection = treasureCollection + 150

    }

    //Put a condition if runner is touching (jwellGroup)
    if (runner.isTouching(jwellGroup)) {

      //If this is true then jwellGroup will destroy   
      jwellGroup.destroyEach()

      //Increasing the score then by 100 each time  
      treasureCollection = treasureCollection + 100

    }

    //Put a condition if runner is touching (swordGroup)   
    if (runner.isTouching(swordGroup)) {

      //If this is true then swordGroup will destroy    
      swordGroup.destroyEach()

      //If this is true then diamondsGroup will destroy  
      diamondsGroup.destroyEach()

      //If this is true then jwellGroup will destroy  
      jwellGroup.destroyEach()

      //If this is true then cashGroup will destroy  
      cashGroup.destroyEach()

      //Set the velocity Y of each sprite of swordGroup as 0
      swordGroup.setVelocityYEach(0)

      //Set the velocity Y of each sprite of cashGroup as 0
      cashGroup.setVelocityYEach(0)

      //Set the velocity Y of each sprite of diamondsGroup as 0
      diamondsGroup.setVelocityYEach(0)
      //Set the velocity Y of each sprite of jwellGroup as 0
      jwellGroup.setVelocityYEach(0)

      //Assigned gameState as END
      gameState = END

    }

  }

  //Put a condition if gameState is equal to END
  if (gameState == END) {

    //Destroyed then the runner
    runner.destroy()

    //Created the sprite boy with (x,y,w,h)
    boy = createSprite(200, 550, 200, 200)

    //Added the animation ("player",boyImage) inside boy
    boy.addAnimation("player", boyImage)

    //Reset the size of the sprite boy as 0.07 through scale prperty
    boy.scale = 0.07

    //Set the velocity Y of sprite road as 0
    road.velocityY = 0

    //Set the visiblity of the gameOver sprite as true
    gameOver.visible = true

  }

  //Drew the sprites after every millisecond
  drawSprites()

  //Put a condition if gameState is equal to SERVE
  if (gameState == SERVE) {

    //Set runner's visiblity as false
    runner.visible = false

    //Set text's color as ("black")
    fill("black")

    //Set the text's size as (30)
    textSize(30)

    //Set the text as `Press 'r' to play`  in 120 X position and 300 Y position
    text(`Press'r'to play`, 120, 300)

  }

  //Put a condition if "r" key is pressed and gameState is equals to SERVE
  if (keyDown("r") && gameState == SERVE) {

    //Assigning gameState as PLAY
    gameState = PLAY

  }

  //Set text's color as ("black")
  fill("black")

  //Set text's size as (25)
  textSize(25)

  /*Set text as `Treasure Collected:${}treasureCollection` with X psition as 100
  and Y position as 150*/
  text(`Treasure Collected:${treasureCollection}`, 100, 150)

}

//Customizable function named-(cash_win)
function cash_win() {

  //Put a condition if frameCount is divisible by 200
  if (frameCount % 200 == 0) {

    /*Created the sprite cash with (x,y,w,h)
    And set the X position as random number rounded off to whole no.*/
    cash = createSprite(Math.round(random(50, 350), 40, 10, 10))

    //Added a image("treasure",cashImage) inside cash
    cash.addImage("treasure", cashImage)

    //Reset the size of the cash as 0.1 through scale property
    cash.scale = 0.1

    //Set the velocity Y of the cash as 2
    cash.velocityY = 2

    //Set the lifetime of the cash as 280
    cash.lifetime = 280

    //Added the sprite (cash) under  the cashGroup
    cashGroup.add(cash)

    //Set treasureHunt's depth equal to cash's depth
    treasureHunt.depth = cash.depth

    //Increasing one value of treasureHunt's depth than itself
    treasureHunt.depth = treasureHunt.depth + 1

  }

}

//Customizable function named-(diamonds_win)
function diamonds_win() {

  //Put a condition if frameCount is divisible by 320  
  if (frameCount % 320 == 0) {

    /*Created the sprite diamonds with (x,y,w,h)
    And set the X position as random number rounded off to whole no.*/
    diamonds = createSprite(Math.round(random(50, 350), 40, 10, 10))

    //Added a image("treasure",diamondsImage) inside diamonds  
    diamonds.addImage("treasure", diamondsImage)

    //Reset the size of the cash as 0.03 through scale property
    diamonds.scale = 0.03

    //Set the velocity Y of the diamonds as 2 
    diamonds.velocityY = 2

    //Set the lifetime of the diamonds as 280 
    diamonds.lifetime = 280

    //Added the sprite (diamonds) under  the diamondsGroup   
    diamondsGroup.add(diamonds)

    //Set treasureHunt's depth equal to diamonds's depth   
    treasureHunt.depth = diamonds.depth

    //Increasing one value of treasureHunt's depth than itself
    treasureHunt.depth = treasureHunt.depth + 1

  }

}

//Customizable function named-(jwell_win)
function jwell_win() {

  //Put a condition if frameCount is divisible by 410  
  if (frameCount % 410 == 0) {

    /*Created the sprite jwell with (x,y,w,h)
     And set the X position as random number rounded off to whole no.*/
    jwell = createSprite(Math.round(random(50, 350), 40, 10, 10))

    //Added a image("treasure",jwellImage) inside jwell
    jwell.addImage("treasure", jwellImage)

    //Reset the size of the jwell as 0.1 through scale property   
    jwell.scale = 0.1

    //Set the velocity Y of the jwell as 2   
    jwell.velocityY = 2

    //Set the lifetime of the jwell as 280  
    jwell.lifetime = 280

    //Added the sprite (jwell) under  the jwellGroup    
    jwellGroup.add(jwell)

    //Set treasureHunt's depth equal to jwell's depth   
    treasureHunt.depth = jwell.depth

    //Increasing one value of treasureHunt's depth than itself   
    treasureHunt.depth = treasureHunt.depth + 1

  }

}

//Customizable function named-(sword_lose)
function sword_lose() {

  //Put a condition if frameCount is divisible by 530  
  if (frameCount % 530 == 0) {

    /*Created the sprite sword with (x,y,w,h)
      And set the X position as random number rounded off to whole no.*/
    sword = createSprite(Math.round(random(50, 350), 40, 10, 10))

    //Added a image("treasure",swordImage) inside sword    
    sword.addImage("treasure", swordImage)

    //Reset the size of the sword as 0.1 through scale property  
    sword.scale = 0.1

    //Set the velocity Y of the sword as 2      
    sword.velocityY = 2

    //Set the lifetime of the sword as 280   
    sword.lifetime = 280

    //Added the sprite (sword) under  the swordGroup     
    swordGroup.add(sword)

    //Set treasureHunt's depth equal to sword's depth      
    treasureHunt.depth = sword.depth

    //Increasing one value of treasureHunt's depth than itself 
    treasureHunt.depth = treasureHunt.depth + 1

  }

}