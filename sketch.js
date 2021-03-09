/***********************************************************************************
	Rooms of a House Sample
	by Max Amido

  Shows navigation structure using buttons and key presses

	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes


***********************************************************************************/



// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//array of images
var images = [];
var midX;
var startY;
var lineHeight = 24;

//Button Images
var tikTokClick;
var leaveComp;
var maskButton;
var hallwayButtons;
var maskOnCeleb;
var kitchenButton;
var handsCursor;
var handsCursorInfected;
var zoopals;
var loverboy;
var laundryButtons;
var water;

//load images in array
function preload(){
  images[0] = loadImage('assets/splash.png');
  images[1] = loadImage('assets/tiktok.png');
  images[2] = loadImage('assets/standup.png');
  images[3] = loadImage('assets/comp-01.png');
  images[4] = loadImage('assets/hallway.png');
  images[5] = loadImage('assets/kitchensoap-01.png');
  images[6] = loadImage('assets/laundry.png');
  images[7] = loadImage('assets/laundrystart.png');
  images[8] = loadImage('assets/compinfected-01.png');
  images[9] = loadImage('assets/kitcheninfected.png');
  images[10] = loadImage('assets/standupinfected.png');
  images[11] = loadImage('assets/tiktokinfected.png');
  images[12] = loadImage('assets/laundrystart.png');

  tikTokClick = loadImage('assets/splashclick.png');
  standUpClick = loadImage('assets/standupclick.png');
  leaveComp = loadImage('assets/leavecompbutton.png');
  maskButton = loadImage('assets/mask.png');
  hallwayButtons = loadImage('assets/hallwaybuttons.png');
  maskOnCeleb = loadImage('assets/MaskOnNotice.png');
  kitchenButton = loadImage('assets/kitchenbutton.png');
  handsCursor = loadImage('assets/hands.png');
  zoopals = loadImage('assets/zoopals-01.png');
  loverboy = loadImage('assets/loverboy-01.png');
  laundryButtons = loadImage('assets/laundrybuttons.png');
  water = loadImage('assets/water-01.png');
  handsCursorInfected = loadImage('assets/dirtyhands.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CORNER);
  textAlign(CENTER);
  textSize(24);

  // Set levitate animation variables
  buttonMove = 0;
  buttonSpeed = .3;

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(0);

  fill(213,206,229);
  rectMode(CORNER)
  rect(0,0,700,560);

  fill(0);

  // will call your state machine function
  drawFunction();

  keyPressed();

//Draws X + Y Coordinates
  // fill(255);
  // text("X: " + mouseX + "   Y: " + mouseY, 100, height - 20);
}

//Functions for the different states

//Draws Splash
drawSplash = function() {
   image(images[0],0, 0 + buttonMove);

   buttonBounce();
}

//Draws On TikTok
drawTikTok = function() {
   image(images[1],0, 0);

   image(tikTokClick,0, -40 + buttonMove);

   buttonBounce();
}

//Draws Living Room
drawStandUp = function() {
  image(images[2],0, 0);

  image(standUpClick,0, -40 + buttonMove);

  //Button for Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 434 && mouseX <= 560){
      if(mouseY >= 130 && mouseY <= 204){
        drawFunction = drawHallway;
      }
    }
  }

  //Button for Back to Tik Tok + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 466 && mouseX <= 613){
      if(mouseY >= 326 && mouseY <= 408){
        drawFunction = drawTikTok;
      }
    }
  }

   buttonBounce();
}

//Draws Computer and Images
drawComputer = function() {

   image(images[3],0, 0);

   image(leaveComp,0,0 + buttonMove);

   buttonBounce();

  if(mouseIsPressed){
    if(mouseX >= 640 && mouseX <= 690){
      if(mouseY >= 239 && mouseY <= 304){
        image(zoopals,0,0);
      }
    }
  }

  if(mouseIsPressed){
    if(mouseX >= 636 && mouseX <= 688){
      if(mouseY >= 154 && mouseY <= 225){
        image(loverboy,0,0);
      }
    }
  }
}

//Draws Hallway Clean
drawHallway = function() {
   image(images[4],0, 0);

   image(maskButton,0,0);

   image(hallwayButtons,0,0 + buttonMove);

   buttonBounce();

  //Button for Living Room from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 274 && mouseX <= 412){
      if(mouseY >= 472 && mouseY <= 553){
        drawFunction = drawStandUp;
      }
    }
  }

  //Button for To Laundry from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 413 && mouseX <= 529){
      if(mouseY >= 321 && mouseY <= 389){
        drawFunction = drawLaundryMask;
      }
    }
  }

  //Button for To Laundry from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 547 && mouseX <= 606){
      if(mouseY >= 190 && mouseY <= 288){
        drawFunction = drawMaskOnHallway;
      }
    }
  }
}

//Draws Hallway w/ Mask
drawMaskOnHallway = function() {
  image(images[4],0, 0);

  image(maskOnCeleb,0,0)

  image(hallwayButtons,0,0 + buttonMove);

  buttonBounce();

  //Button for Living Room from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 274 && mouseX <= 412){
      if(mouseY >= 472 && mouseY <= 553){
        drawFunction = drawStandUp;
      }
    }
  }

  //Button for To Laundry from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 413 && mouseX <= 529){
      if(mouseY >= 321 && mouseY <= 389){
        drawFunction = drawLaundryMask;
      }
    }
  }
}

//Draws Kitchen Soap
drawKitchen = function() {

  image(images[5],0, 0);

  image(kitchenButton,0,0 + buttonMove);

  buttonBounce();

  //noCursor();

  image(handsCursor,mouseX,mouseY);

  //Button for Living Room from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 531 && mouseX <= 669){
      if(mouseY >= 482 && mouseY <= 553){
        drawFunction = drawHallway;
      }
    }
  }

  if(keyIsPressed === true){
      image(water,0,0);
    }
}


//Draws LaundryRoom w/ Mask
drawLaundryMask = function() {
   image(images[6],0, 0);

   image(laundryButtons,0,0 + buttonMove);

   buttonBounce();

  //Button for Apartment from laundry
  if(mouseIsPressed){
    if(mouseX >= 522 && mouseX <= 689){
      if(mouseY >= 482 && mouseY <= 547){
        drawFunction = drawHallwayInfected;
      }
    }
  }
}

//Draws LaundryRoom w/ Mask
drawLaundryStart = function() {
   image(images[12],0, 0);

   image(laundryButtons,0,0 + buttonMove);

   buttonBounce();

  //Button for Apartment from laundry
  if(mouseIsPressed){
    if(mouseX >= 522 && mouseX <= 689){
      if(mouseY >= 482 && mouseY <= 547){
        drawFunction = drawHallwayInfected;
      }
    }
  }
}

//Draws LaundryRoom w/o Mask
drawLaundryNoMask = function() {
   image(images[6],0, 0);

   image(laundryButtons,0,0 + buttonMove);

   buttonBounce();

  //Button for Apartment from laundry
  if(mouseIsPressed){
    if(mouseX >= 522 && mouseX <= 689){
      if(mouseY >= 482 && mouseY <= 547){
        drawFunction = drawHallwayInfected;
      }
    }
  }
}

//Draws Hallway Infected
drawHallwayInfected = function() {
   image(images[4],0, 0);

   image(maskButton,0,0);

   image(hallwayButtons,0,0 + buttonMove);

   buttonBounce();

  //Button for Living Room from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 274 && mouseX <= 412){
      if(mouseY >= 472 && mouseY <= 553){
        drawFunction = drawStandUpInfected;
      }
    }
  }

//Draws Living Room
drawStandUpInfected = function() {
  image(images[10],0, 0);

  image(standUpClick,0, -40 + buttonMove);

  //Button for Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 434 && mouseX <= 560){
      if(mouseY >= 130 && mouseY <= 204){
        drawFunction = drawHallwayInfected;
      }
    }
//Draws Comp Infected
    if(mouseIsPressed){
      if(mouseX >= 0 && mouseX <= 188){
        if(mouseY >= 199 && mouseY <= 267){
          drawFunction = drawComputerInfected;
        }
      }
    }
  }

  //Button for Back to Tik Tok + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 466 && mouseX <= 613){
      if(mouseY >= 326 && mouseY <= 408){
        drawFunction = drawTikTokInfected;
      }
    }
  }

   buttonBounce();
}

//Draws Computer and Images
drawComputerInfected = function() {

   image(images[8],0, 0);

   image(leaveComp,0,0 + buttonMove);

   buttonBounce();

  if(mouseIsPressed){
    if(mouseX >= 636 && mouseX <= 688){
      if(mouseY >= 154 && mouseY <= 225){
        image(loverboy,0,0);
      }
    }
  }

    if(mouseIsPressed){
      if(mouseX >= 523 && mouseX <= 684){
        if(mouseY >= 426 && mouseY <= 513){
          drawFunction = drawStandUpInfected;
        }
      }
    }


//Attempt at making link to CDC website
//   if(mouseIsPressed){
//     if(mouseX >= 23 && mouseX <= 510){
//       if(mouseY >= 46 && mouseY <= 369){
//         link('https://www.cdc.gov/coronavirus/2019-ncov/index.html');
//       }
//     }
//   }
}

//Draws Kitchen Soap
drawKitchenInfected = function() {

  image(images[9],0, 0);

  image(kitchenButton,0,0 + buttonMove);

  buttonBounce();

  //noCursor();

  image(handsCursorInfected,mouseX,mouseY);

  //Button for Living Room from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 531 && mouseX <= 669){
      if(mouseY >= 482 && mouseY <= 553){
        drawFunction = drawHallway;
      }
    }
  }

  if(keyIsPressed === true){
      image(water,0,0);
    }
}


//Button for To Laundry from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 413 && mouseX <= 529){
      if(mouseY >= 321 && mouseY <= 389){
        drawFunction = drawLaundryNoMask;
      }
    }
  }

//Button for To Laundry from Hallway + Could not get working in own function
  if(mouseIsPressed){
    if(mouseX >= 547 && mouseX <= 606){
      if(mouseY >= 190 && mouseY <= 288){
        drawFunction = drawMaskOnHallway;
      }
    }
  }
}

//Draws On TikTokInfected
drawTikTokInfected = function() {
   image(images[11],0, 0);

   image(tikTokClick,0, -40 + buttonMove);

   buttonBounce();

    if(mouseIsPressed){
      if(mouseX >= 62 && mouseX <= 260){
        if(mouseY >= 160 && mouseY <= 541){
          drawFunction = drawStandUpInfected;
        }
      }
    }
}

function keyPressed(){
//Draws TikTok Room
  if(drawFunction === drawSplash){
    if(keyCode === 32){
      drawFunction = drawTikTok;
    }
  }

//TikTok Again or Standup 
  else if(drawFunction === drawTikTok){
    if(mouseIsPressed){
      if(mouseX >= 62 && mouseX <= 260){
        if(mouseY >= 160 && mouseY <= 541){
          drawFunction = drawStandUp;
        }
      }
    }
  }

//Draw Hallway or Computer
  else if(drawFunction === drawStandUp){
    if(mouseIsPressed){
      if(mouseX >= 0 && mouseX <= 188){
        if(mouseY >= 199 && mouseY <= 267){
          drawFunction = drawComputer;
        }
      }
    }
  }

//Draw Computer Exit to StandUp 
  else if(drawFunction === drawComputer){
    if(mouseIsPressed){
      if(mouseX >= 523 && mouseX <= 684){
        if(mouseY >= 426 && mouseY <= 513){
          drawFunction = drawStandUp;
        }
      }
    }
  }


//Draw Kitchen from Hallway 
  else if(drawFunction === drawHallway){
    if(mouseIsPressed){
      if(mouseX >= 154 && mouseX <= 276){
        if(mouseY >= 315 && mouseY <= 384){
          drawFunction = drawKitchen;
        }
      }
    }
  }

//Draw Kitchen from Hallway 
  else if(drawFunction === drawMaskOnHallway){
    if(mouseIsPressed){
      if(mouseX >= 154 && mouseX <= 276){
        if(mouseY >= 315 && mouseY <= 384){
          drawFunction = drawKitchen;
        }
      }
    }
  }

//Draws LaundryRoom Start
  if(drawFunction === drawLaundryMask){
    if(keyIsPressed === true){
      drawFunction = drawLaundryStart;
    }
  }

//Draw KitchenInfected from Hallway 
  else if(drawFunction === drawHallwayInfected){
    if(mouseIsPressed){
      if(mouseX >= 154 && mouseX <= 276){
        if(mouseY >= 315 && mouseY <= 384){
          drawFunction = drawKitchenInfected;
        }
      }
    }
  }



// //Draws Laundry With Mask
//   if(drawFunction === drawLaundryMask){
//     if(key === 32){
//       drawFunction = drawHallway;
//     }
  }

// //Draw Mask

// }

//Function to animate images (Natalie Morris' Code)
function buttonBounce() {
  if (buttonMove > 10) {
    buttonSpeed = -.1;
  }

  if (buttonMove < 0) {
    buttonSpeed = .1;
  }

  buttonMove = buttonMove + buttonSpeed;
}