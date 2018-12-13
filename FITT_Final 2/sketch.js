//the object that is storing user's data
let userData = {};

//url variable limking to database file
// let url;

let tracking;
let navButton;
let playButton;
let submit;
// let response;
let a;
let song;
let button;
let textin;
let textin2;
let Dal1;
let Dal2;
let Dal3;
let Syn1;
let Syn2;
let Syn3;
let Trump1;
let Trump2;
let Trump3;
let Cali1;
let Cali2;
let Cali3;
let completion;
let completion2;
let completion3;
let completion4;
let s;
//link variables
let link;
let link2;
let link3;
let link4;
let link5;
//the array that holds incoming button & potent readings
let potentiometerReadings = [-1,-1,-1,-1,-1,-1,-1];
// global variable that'll store incoming data from the Database
let theData;
let values;

///Temporary page variable
let timeoutSet = false;



//current user avg variables
let userFear = 0;
let userAnger = 0;
let userSadness = 0;
let userNeutral = 0;
let userFearCount = 0;
let userAngerCount = 0;
let userSadnessCount = 0;
let userNeutralCount = 0;
let userFearAvg, userAngerAvg, userSadnessAvg, userNeutralAvg;
let parsed;


//Total users avg variables
let fear = 0;
let anger = 0;
let sadness = 0;
let neutral = 0;
let fearCount = 0;
let angerCount = 0;
let sadnessCount = 0;
let neutralCount = 0;
let fearAvg, angerAvg, sadnessAvg, neutralAvg; 


///vars that allows us to cycle through each user per mouse click
let counter = 0;





///////////////////////////////////////////////////////////////////
//let bl;

function preload() {
   
  //Dallas Images
	Dal1 = createImg('DallasDoor.png');
  Dal2 = createImg('DallasVictim.png');
  Dal3 = createImg('DallasShooter.png');
  
  //Synagogue Images
  Syn1 = createImg('Synagogue.png');
  Syn2 = createImg('JewishHug.png');
  Syn3 = createImg('SynagogueMourning.png');
  
  Cali1 = createImg('CaliBar.png');
  Cali2 = createImg('CaliShooter.png');
  Cali3 = createImg('CaliBar2.png');
  
  Trump1 = createImg('TrumpGuns.png');
  Trump2 = createImg('TrumpSanctions.png');
	Trump3 = createImg('TrumpRocks.png');
  

  //firstAudio
  song = loadSound('Audio3.mp3');
  button = createImg('button.png')
  button.size(150, 150);
  button.position(displayWidth/2 -15, 490)
  button.mousePressed(play);
  
  //secondAudio
  song2 = loadSound('Audio2.mp3');
  button2 = createImg('button.png')
  button2.size(150, 150);
  button2.position(displayWidth/2-15, 490)
  button2.mousePressed(play2);
  
  
  //thirdAudio
  song3 = loadSound('Audio1.mp3');
  button3 = createImg('button.png')
  button3.size(150, 150);
  button3.position(displayWidth/2-15, 490)
  button3.mousePressed(play3);
  
  //fourthAudio
  song4 = loadSound('Audio4.mp3');
  button4 = createImg('button.png')
  button4.size(150, 150);
  button4.position(displayWidth/2-15, 490)
  button4.mousePressed(play4);
  
  
  //textinputs
  textin=createInput();
  textin.position(displayWidth/2-110, displayHeight/2+50);
  textin.size(300, 75);
  textin2 = createInput();
  textin2.position(displayWidth/2-110, displayHeight/2+50);
  textin2.size(300, 75);
  
// //SUBMIT BUTTON
//   submitButton=createImg('SUBMITBUTTON.png')
//   submitButton.size(75, 75);
//   submitButton.position(displayWidth/2+10, 500)
//   				//add save function
//   submitButton.mousePressed()
  
}

let url;

let theData2;

function setup() {
  createCanvas(displayWidth, displayHeight);
  //declare navigation
  tracking = 1;
  
  url = '/data2';
  loadJSON(url, dataViz);
  theData2 = loadJSON(url);
  
  link = createA("https://action.aclu.org/petition/doj-must-report-police-killings?ms_aff=NAT&initms_aff=NAT&ms=180917_criminallawreform_dcra&initms=180917_criminallawreform_dcra&ms_chan=web&initms_chan=web", 'Justice Department Must Report Police Killings', [self])
  link.style('color', '#f0c744');
  link.style('font-size', '21px')
  link.style('font-family', 'BASKERVILLE');

  link2 = createA("https://action.aclu.org/petition/cbp-stop-abusing-children?ms_aff=NAT&initms_aff=NAT&ms=180524_immigrantrights_cbpchildabuse_&initms=180524_immigrantrights_cbpchildabuse_&ms_chan=web&initms_chan=web", ' Stop The Government from Abusing Child Immigrants ', [self])
  link2.style('color', '#f0c744');
  link2.style('font-size', '21px')
  link2.style('font-family', 'BASKERVILLE');

  link3 = createA("https://action.aclu.org/send-message/demand-transparency", 'Sign Petition for Stricter Gun Laws', [self])
  link3.style('color', '#f0c744');
  link3.style('font-size', '21px')
  link3.style('font-family', 'BASKERVILLE');

  link4 = createA("https://secure.everyaction.com/Ekal5ph2tkmZW7QpupD5Qg2", 'Demand Transparency from New Yorker Police Department', [self])
  link4.style('color', '#f0c744');
  link4.style('font-size', '21px')
  link4.style('font-family', 'BASKERVILLE');

  

  link5 = createA("https://secure.everyaction.com/t8B4rAUVqkOHxX3iTlaxVg2", 'Volunteer To Help for Stricter Gun Laws', [self])
  link5.style('color', '#f0c744');
  link5.style('font-size', '21px')
  link5.style('font-family', 'BASKERVILLE');




  
  
// Instantiate our SerialPort object
serial = new p5.SerialPort();

// Let's list the ports available
// var portlist = serial.list();


serial.open("/dev/cu.usbmodem14341");
serial.on('connected', serverConnected);
serial.on('list', gotList);
serial.on('data', gotData);
serial.on('error', gotError);
serial.on('open', gotOpen);

}



// We are connected and ready to go
function serverConnected() {
  print("We are connected!");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is open!");
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  var currentString = serial.readStringUntil("\r\n");
 
  if (currentString) {
    potentiometerReadings = split(currentString, ",").map(numberAsString => Number(numberAsString))

      console.log(potentiometerReadings);

      navButton = potentiometerReadings[4];
      playButton = potentiometerReadings[5];
      submit = potentiometerReadings[6];

      if (tracking == 4) {
        
        userData.a1 = [potentiometerReadings[0], potentiometerReadings[1], potentiometerReadings[2], potentiometerReadings[3]]; //array structure for emotion of aud1;
        // if (potentiometerReadings[3] == 1) {
        //   userData.a1 = [0, 0, 0, 10];
        // }

      } else if (tracking == 8){
       
        userData.a2 = [potentiometerReadings[0], potentiometerReadings[1], potentiometerReadings[2], potentiometerReadings[3]]; //array structure for emotion of aud2;
        // if (potentiometerReadings[3] == 1) {
        //   userData.a2 = [0, 0, 0, 10];
        // }
     
      } else if (tracking == 12){
        
        userData.a3 = [potentiometerReadings[0], potentiometerReadings[1], potentiometerReadings[2], potentiometerReadings[3]]; //array structure for emotion of aud3;
        // if (potentiometerReadings[3] == 1) {
        //   userData.a3 = [0, 0, 0, 10];
        // }
      } else if (tracking == 16){
    
        userData.a4 = [potentiometerReadings[0], potentiometerReadings[1], potentiometerReadings[2], potentiometerReadings[3]] ; //array structure for emotion of aud1;
        // if (potentiometerReadings[3] == 1) {
        //   userData.a4 = [0, 0, 0, 10];
        // }
      }
    }
  }
  


//////functionalities(setting potentiometer values and saving that data to database in JSON format)
function pot1() {
  textSize(64);
  fill(255, 255, 255);
  if (userData.a1) {
    if (potentiometerReadings[3] == 1) {
      
      textSize(64);
      userData.a1 = [0, 0, 0, 10];
      fill(color(240, 199, 68));
      text(userData.a1[0], displayWidth/2-125,200);
      text(userData.a1[1], displayWidth/2-25,200);
      text(userData.a1[2], displayWidth/2+75,200);
      text(userData.a1[3], displayWidth/2+175,200);
      textSize( 15);
	    text('Notice: Neutral State Activated! Deactivate By Pressing Neutral Button Again.', displayHeight/2 +220)
    }
    else{
    text(userData.a1[0], displayWidth/2-125,200);
    text(userData.a1[1], displayWidth/2-25,200);
    text(userData.a1[2], displayWidth/2+75,200);
    text(userData.a1[3], displayWidth/2+175,200);
    fill(color(240, 199, 68));
    textSize( 15);
    text('Caution: Pressing the neutral button permanently logs neutral to 10 and all other emotions to 0!', displayWidth/2+35,85)
    fill(255,255,255);
    }
  }
}
function pot2() {
  textSize(64);
  fill(255, 255, 255);
  if (userData.a2){
    if (potentiometerReadings[3] == 1) {
      textSize(64);
      userData.a2 = [0, 0, 0, 10];
      fill(color(240, 199, 68));
      text(userData.a2[0], displayWidth/2-125,200);
      text(userData.a2[1], displayWidth/2-25,200);
      text(userData.a2[2], displayWidth/2+75,200);
      text(userData.a2[3], displayWidth/2+175,200);
      textSize( 15);
	    text('Notice: Neutral State Activated! Deactivate By Pressing Neutral Button Again.', displayHeight/2 +220)
    }
    else{
  text(userData.a2[0], displayWidth/2-125,200);
  text(userData.a2[1], displayWidth/2-25,200);
  text(userData.a2[2], displayWidth/2+75,200);
  text(userData.a2[3], displayWidth/2+175,200);
  fill(color(240, 199, 68));
     textSize( 15);
    text('Caution: Pressing the neutral button permanently logs neutral to 10 and all other emotions to 0!', displayWidth/2+35,85)
    }
  
  }
}
function pot3() {
  textSize(64);
  fill(255, 255, 255);
  if (userData.a3) {
    if (potentiometerReadings[3] == 1) {
      textSize(64);
      userData.a3 = [0, 0, 0, 10];
      fill(color(240, 199, 68));
      text(userData.a3[0], displayWidth/2-125,200);
      text(userData.a3[1], displayWidth/2-25,200);
      text(userData.a3[2], displayWidth/2+75,200);
      text(userData.a3[3], displayWidth/2+175,200);
      textSize( 15);
	    text('Notice: Neutral State Activated! Deactivate By Pressing Neutral Button Again.', displayHeight/2 +220)
    }
  else{
  text(userData.a3[0], displayWidth/2-125,200);
  text(userData.a3[1], displayWidth/2-25,200);
  text(userData.a3[2], displayWidth/2+75,200);
  text(userData.a3[3], displayWidth/2+175,200);
  fill(color(240, 199, 68));
     textSize( 15);
    text('Caution: Pressing the neutral button permanently logs neutral to 10 and all other emotions to 0!', displayWidth/2+35,85)
  }
  }
}
function pot4() {
  textSize(64);
  fill(255, 255, 255);
  if (userData.a4) {
    if (potentiometerReadings[3] == 1) {
      textSize(64);
      userData.a4 = [0, 0, 0, 10];
      fill(color(240, 199, 68));
      text(userData.a4[0], displayWidth/2-125,200);
      text(userData.a4[1], displayWidth/2-25,200);
      text(userData.a4[2], displayWidth/2+75,200);
      text(userData.a4[3], displayWidth/2+175,200);
      textSize( 15);
	    text('Notice: Neutral State Activated! Deactivate By Pressing Neutral Button Again.', displayHeight/2 +220)
    }

  else{
  text(userData.a4[0], displayWidth/2- 125,200);
  text(userData.a4[1], displayWidth/2-25,200);
  text(userData.a4[2], displayWidth/2+75,200);
  text(userData.a4[3], displayWidth/2+175,200);
  fill(color(240, 199, 68));
     textSize( 15);
	  text('Caution: Pressing the neutral button permanently logs neutral to 10 and all other emotions to 0!', displayWidth/2+35,85)

  }
}
}

//saves users potentiometer readings at the end
function savedata() {
  // send userData to server
  loadStrings("http://localhost:3000/save?datatosave="+JSON.stringify(userData), function() {
    print("data saved!");
  });
  }

////////////// audio control - play/pause
function play() { 
  if (song.isPlaying()) {
   song.pause();
  } else {
    song.play();
  }}

function play2() { 
  if (song2.isPlaying()) {
   song2.pause();
  } else {
    song2.play();
  }}

function play3() { 
  if (song3.isPlaying()) {
   song3.pause();
  } else {
    song3.play();
  }}

function play4() { 
  if (song4.isPlaying()) {
   song4.pause();
  } else {
    song4.play();
  }}

function draw() {
  background(255);
  
   imageMode(CENTER, CENTER)
  //Flow Of Events
  
  //intropage
  if(tracking == 1){
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    button.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    textin.hide();
    textin2.hide();
    Cali1.hide();
    Cali2.hide();
    Cali3.hide();
    Trump1.hide();
    Trump2.hide();
    Trump3.hide();
    Dal1.hide();
    Dal2.hide();
    Dal3.hide();
    Syn1.hide();
    Syn2.hide();
    Syn3.hide();
    intro();
    nav();
  }
  
    else if (tracking == 2){
    contWarn()
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
   
   
  }
  
  //audio1
  else if (tracking == 3){
    firstAudio()
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    button.show()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    music();
   
  }
  //howdoes
  else if(tracking == 4){
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
 		howFeel()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    pot1();
    nav();
   

  }


  //feelingsSubmitted
  else if(tracking == 5){
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    feelSubmit();
    nav();
  }

  //should
  else if(tracking == 6){
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
 		shouldPage()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
  }

  
  //audio2
  else if (tracking == 7){
    secAudio()
    button2.show()
    button.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    music();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()

  }
   //howdoes
  else if(tracking == 8){
    // submitButton.hide();
 		howFeel()
   button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    pot2();
    nav();
 
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()

  }
    //feelingsSubmitted
    else if(tracking == 9){
      feelSubmit();
      nav();
      link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    }
  
  //should
  else if(tracking == 10){
    // submitButton.hide();
 		shouldPage()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  
  
  }
  
  //audio3
   else if (tracking == 11){
    thirdAudio()
    button.hide()
    button2.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    button3.show()
    nav();
    music();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }
  
   //howdoes
  else if(tracking == 12){
    // submitButton.hide();
 		howFeel()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    pot3();
    nav();
  
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()

  }
  //feelingsSubmitted
  else if(tracking == 13){
    feelSubmit();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }

  //should
  else if(tracking == 14){
    // submitButton.hide();
 		shouldPage()
 	  button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }
  
  //audio4
  else if (tracking == 15){
    fourthAudio()
    button4.show()
    button.hide()
    button2.hide()
    button3.hide()
    textin.hide()
    textin2.hide();
    nav();
    music();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }
   //howdoes
  else if(tracking == 16){
    // submitButton.hide();
 		howFeel()
    button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    pot4();
    nav();
  
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }

    //feelingsSubmitted
    else if(tracking == 17){
    feelSubmit();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    }
  
  //should
  else if(tracking == 18){
    // submitButton.hide();
 		shouldPage()
  	button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }
  
  else if(tracking== 19){
    // submitButton.hide();
    nowPage()
  	button.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    textin.hide()
    textin2.hide();
    nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }
  
  else if(tracking== 20){
    // submitButton.show()
    howPage()
    textin.show()
    textin2.hide();
    // nav();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    submission();
 
  }
  
  else if(tracking== 21){
  // submitButton.hide();
  whyPage()
  textin2.show()
  textin.hide();
  // nav();
  submission();
  link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
  }



  else if (tracking == 22) {
    displayDataViz();
    nav();
    textin.hide();
    textin2.hide();
    link.hide()
    link2.hide()
    link3.hide()
    link4.hide()
    link5.hide()
    }
    else if (tracking == 23) {
      displayComparisonData(theData2);
      compareViz()
      nav();
      textin.hide();
      textin2.hide();
      link.hide()
      link2.hide()
      link3.hide()
      link4.hide()
      link5.hide()
      }


  else if (tracking == 24) { 
    endPage();
    textin.hide();
    textin2.hide();
    nav();
    link.show()
    link2.show()
    link3.show()
    link4.show()
    link5.show()
  }

}


function nav() {
  if (navButton == 1) {
    console.log("yay")
    tracking++;
  }

}


function music() {
  if (playButton === 1 && tracking === 3) {
    play()
  }
 else if(playButton === 1 && tracking === 7){
  play2()
  song.pause()
  }
else if(playButton === 1 && tracking === 11){
  play3()
    song.pause()
    song2.pause() 
  }
  else if(playButton === 1 && tracking === 15){
    play4()
    song.pause()
    song2.pause() 
    song3.pause()  
  }
}




function submission () {

  if (submit === 1 && tracking === 20) {
    userData.how = textin.value();
    userData.why = "";
    savedata();   //saves current user's input
    userData = {}; //resets the current user's input
    tracking = 22;
                  
  }

  else if (submit === 1 && tracking === 21) {
    userData.how = "";
    userData.why = textin2.value();
    savedata();   //saves current user's input
    userData = {}; //resets the current user's input
    tracking++;
                  
  }

}
 
function keyPressed(){

  //arrows for back and forth navigation
  if(keyCode === 90){
    tracking++;
    console.log("yay")
    if (tracking == 25) {
      // check if user is on last page
      // if so, do this:
      // userData.how = textin.value();
      // userData.why = textin2.value();
      // savedata();   //saves current user's input
      // userData = {}; //resets the current user's input
      tracking = 1; //takes user back to start page
      counter++
    }
 
    }


  

  else if(keyCode === LEFT_ARROW){
  tracking = tracking - 1
  }

  //if a is pressed go to how page
  if(keyCode === 65 && tracking==19){
  tracking = 20}
  
  //if s is pressed go To why page
   if(keyCode === 83 && tracking==19){
  tracking = 21}

  //r to go back to intro page
 	if(keyCode === 27){
  tracking = 1
  }
  
  //play audio 1 if x is pressed
  if(keyCode === 88){
 		play()
  }
  
  if(keyCode === 88 && tracking === 6){
 play2()
    song.pause()
  }

    if(keyCode === 88 && tracking === 9){
 play3()
    song.pause()
    song2.pause() 
  }
  
 
    if(keyCode === 88 && tracking === 12){
 		play4()
    song.pause()
    song2.pause()  
    song3.pause()  
  }
}


//////////////PAGES//////////////////////////////////////////


function intro(){
background(0, 0, 0) 
textAlign(CENTER, CENTER)
fill(255, 255, 255)

textFont('Baskerville', 100);
text('Feeling in the Time', displayWidth/2, displayHeight/2 - 100)  
  
textFont('Helvetica', 25);
text('PRESS NEXT TO START', displayWidth/2, displayHeight/2) 
}

function contWarn(){
background(0, 0, 0) 
fill(255,255,255)
textFont('Helvetica', 20);
text('Its 2018 and America is in a strange place. \nDay-after-day, we are fed propaganda and ‘news’ supported and perpetuated by hate, malice, and injustice. \nIn ‘Feeling in the Times’, you will be taken on a brief journey through September, October, and November of 2018 \nfrom the lens of various major news outlets. Some of the content that you will experience may be triggering \nand allude to violence, discrimination, and abuse of power. \nThe events to be described are, in fact, true and represent the current state of our country – \nhow do you feel?', displayWidth/2, displayHeight/2-80)

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325) 

textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
}

function firstAudio() {
background(0, 0, 0)  

fill(169, 169, 169)
noStroke()
ellipse( displayWidth/3-320, 109, 201, 201) 
ellipse( displayWidth/3+285, 110, 200, 200) 
ellipse( displayWidth/3+780, 110, 200, 200) 
  
imageMode(CENTER, CENTER)
image(Dal1, displayWidth/3-320, 110, 200, 200)
image(Dal2, displayWidth/3+285, 110, 250, 250)
image(Dal3, displayWidth/3+780, 110, 250, 250)
  
fill(255, 255, 255)  
  
textFont('Baskerville', 100);
text('Press Play For Audio', displayWidth/2+40, displayHeight/2 - 90) 

textFont('Helvetica', 30);
text('Date: September 9, 2018', displayWidth/2+50, displayHeight/2 -15) 
textFont('Helvetica', 18);  
text('1/4', displayWidth/2+55, 705)

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325)

textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
  
  
completion = song.currentTime() / song.duration();
fill(255, 255, 255)
rect(0, 685, width,2)
strokeWeight(2)
stroke(0, 0, 0)
fill(169, 169, 169) 
ellipse(completion*width, 685, 20, 20);  
}

function howFeel() {
background(0,0,0) 
  
noStroke()
fill(255, 255, 255)
textFont('Baskerville', 50);
text('HOW DOES THAT MAKE YOU FEEL?', displayWidth/2, displayHeight/2 - 100) 
  
textFont('Helvetica', 20);
text('Use remote control to answer. You may input multiple responses.', displayWidth/2, displayHeight/2) 
textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325) 

///textFont('Helvetica', 15);
///text('PRESS Z TO CONTINUE', displayWidth/2+580, displayHeight/2+325) 
textSize( 15);
text('FEAR ', displayWidth/2-125,250)
text('ANGER ', displayWidth/2-25,250)
text('SADNESS ', displayWidth/2+75,250)
fill(color(240, 199, 68));
text('NEUTRAL ', displayWidth/2+175,250)

// text(userData.a1[0], displayWidth/2-125,200);
// text(userData.a1[1], displayWidth/2-25,200);
// text(userData.a1[2], displayWidth/2+75,200);
// text(userData.a1[3], displayWidth/2+175,200);

}


function feelSubmit() {
  background(0,0,0) 
    
  noStroke()
  fill(255, 255, 255)
  textFont('Baskerville', 50);
  text('YOUR RESPONSES HAVE BEEN RECORDED', displayWidth/2, displayHeight/2 - 100) 
    
  textFont('Helvetica', 20);
  text('Please reset your knobs back to 0', displayWidth/2, displayHeight/2) 
  textFont('Helvetica', 15);
  text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
  
  textFont('Helvetica', 15);
  text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325) 
  
  }

function shouldPage() {
background(0, 0, 0)  
fill(255, 255, 255)
textAlign(CENTER)
textFont('Baskerville', 100+(sin(frameCount/10)*20));
text('Why Do You Feel That Way?', displayWidth/2, displayHeight/2 - 100) 
 
// textFont('Helvetica', 15);
// text('PRESS Z TO CONTINUE', displayWidth/2+580, displayHeight/2+325) 
textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 

  if (timeoutSet == false) {
    timeoutSet = true;
    setTimeout(function() { 
      tracking++; 
      timeoutSet = false;
    }, 3000);
  }
}


function secAudio() {
background(0, 0, 0)  

fill(169, 169, 169)
noStroke()
ellipse( displayWidth/3-320, 110, 200, 200) 
ellipse( displayWidth/3+285, 110, 200, 200) 
ellipse( displayWidth/3+780, 110, 200, 200) 
  
imageMode(CENTER, CENTER)
image(Syn1, displayWidth/3-320, 110, 270, 270)
image(Syn2, displayWidth/3+281, 110, 270, 270)
image(Syn3, displayWidth/3+780, 110, 230, 230)
  
fill(255, 255, 255)  
  
textFont('Baskerville', 100);
text('Press Play For Audio', displayWidth/2+40, displayHeight/2 - 90) 

textFont('Helvetica', 30);
text('Date: October 27, 2018', displayWidth/2+50, displayHeight/2 -15) 
textFont('Helvetica', 18);  
text('2/4', displayWidth/2+55, 705)

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325)
  
  
completion2 = song2.currentTime() / song2.duration();
fill(255, 255, 255)
rect(0, 685, width,2)
strokeWeight(2)
stroke(0, 0, 0)
fill(169, 169, 169) 
ellipse(completion2*width, 685, 20, 20);  
 

textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
}


function thirdAudio() {
background(0, 0, 0)  

fill(169, 169, 169)
noStroke()
ellipse( displayWidth/3-320, 110, 200, 200) 
ellipse( displayWidth/3+285, 110, 200, 200) 
ellipse( displayWidth/3+780, 110, 200, 200) 
  
imageMode(CENTER, CENTER)
image(Trump1, displayWidth/3-320, 110, 240, 240)
image(Trump2, displayWidth/3+285, 110, 260, 260)
image(Trump3, displayWidth/3+780, 110, 260, 260)
  
fill(255, 255, 255)  
  
textFont('Baskerville', 100);
text('Press Play For Audio', displayWidth/2+40, displayHeight/2 - 90) 

textFont('Helvetica', 30);
text('Date: November 2, 2018', displayWidth/2+50, displayHeight/2-15) 
textFont('Helvetica', 18);  
text('3/4', displayWidth/2+55, 705)

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325)
textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 

completion3 = song3.currentTime() / song3.duration();
fill(255, 255, 255)
rect(0, 685, width,2)
strokeWeight(2)
stroke(0, 0, 0)
fill(169, 169, 169) 
ellipse(completion3*width, 685, 20, 20);  

 
}

  





function fourthAudio() {
  
background(0, 0, 0)  

fill(169, 169, 169)
noStroke()
ellipse( displayWidth/3-320, 110, 200, 200) 
ellipse( displayWidth/3+285, 110, 200, 200) 
ellipse( displayWidth/3+780, 110, 200, 200) 
  
imageMode(CENTER, CENTER)
image(Cali1, displayWidth/3-320, 110, 260, 260)
image(Cali2, displayWidth/3+285, 110, 230, 230)
image(Cali3, displayWidth/3+780, 110, 260, 260)
  
fill(255, 255, 255)  
  
textFont('Baskerville', 100);
text('Press Play For Audio', displayWidth/2+40, displayHeight/2 - 90) 

textFont('Helvetica', 30);
text('Date: November 8, 2018', displayWidth/2+50, displayHeight/2 -15) 
textFont('Helvetica', 18);  
text('4/4', displayWidth/2+55, 705)

textFont('Helvetica', 15);
text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+325)
textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
  
  
completion4 = song4.currentTime() / song4.duration();
fill(255, 255, 255)
rect(0, 685, width,2)
strokeWeight(2)
stroke(0, 0, 0)
fill(169, 169, 169) 
ellipse(completion4*width, 685, 20, 20); 
}


function howPage(){
    
  background(0, 0, 0)
  fill(255, 255, 255)
 textFont('Baskerville', 100);
	text('HOW?', displayWidth/2+40, displayHeight/2 - 75) 
  
  textFont('Helvetica', 15);
  text('ENTER TEXT INTO FIELD & PRESS SUBMIT TO CONTINUE', displayWidth/2+40, displayHeight/2)
  textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
  
}



function whyPage(){
  
  background(0, 0, 0) 
  fill(255, 255, 255)
 	textFont('Baskerville', 100);
	text('WHY?', displayWidth/2+40, displayHeight/2 - 75) 
  
  textFont('Helvetica', 15);
  text('ENTER TEXT INTO FIELD & PRESS SUBMIT TO CONTINUE', displayWidth/2+40, displayHeight/2)
  textFont('Helvetica', 15);
text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
}

function nowPage(){
  background(0, 0, 0) 
  fill(255, 255, 255)
  
 textFont('Baskerville', 50);
	text('Now that you Feel, Will you take Action?', displayWidth/2+40, displayHeight/2 - 75)
	textFont('Helvetica', 18);
  text('IF YES PRESS A  OR  IF NO PRESS S', displayWidth/2+40, displayHeight/2) 
  textFont('Helvetica', 15);
  text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
}

function endPage(){
  background(0, 0, 0) 
  fill(255, 255, 255)
 textFont('Baskerville', 45);
  text('THANK YOU FOR EXPERIENCING "FEELING IN THE TIMES"', displayWidth/2+30, displayHeight/2 - 120)
  textFont('Helvetica', 21);
  text('TAKE ACTION BEFORE YOU LEAVE?', displayWidth/2+40, displayHeight/2-65) 
  textFont('Helvetica', 15);
  text('USE TAB TO SELECT & ENTER TO GO!', displayWidth/2+40, displayHeight/2+10) 
  link.position(displayWidth/2 -160, displayHeight/2+50);
  link2.position(displayWidth/2 -160, displayHeight/2+100);
  link3.position(displayWidth/2 -160, displayHeight/2+150);
  link4.position(displayWidth/2 -160, displayHeight/2+200);
  link5.position(displayWidth/2 -160, displayHeight/2+250);
 
  textFont('Helvetica', 15);
  text('PRESS ESC TO RESET', displayWidth/2-580, displayHeight/2+325) 
}

///data visualization code
function dataViz(data) {
  theData = data;
  background(169,169,169);

  // console.log('the dta', data.length);
  var parsed = JSON.parse(theData[1].data);
  console.log('the parsed data', parsed);
  console.log('a1 is', parsed.a1[0]);
  console.log(parsed.a1.length);


  let keys = Object.keys(parsed);
  values = Object.values(parsed);
  print(keys);
  print(values[3]);
}

function displayDataViz(data) {
  background(169,169,169);

  
  let hspacing = (width - 300) / 4;
  let vspacing = (height - 90) / 4;

  textStyle(BOLD);
 	textFont('HELVETICA', 20);
	text('YOUR EMOTIONAL RESPONSES', 750, 20)

  
  textSize(17)
  text("Fear ", hspacing + 15, 65);
  text("Anger ", hspacing * 1 + 305, 65)
  text("Sadness ", hspacing * 2 + 295, 65)
  text("Neutral ", hspacing * 3 + 300, 70)

  for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 4; j++) {
      
      textFont('Helvetica', 15);
      text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+425)
			noStroke();
      fill('black')
      textSize(15)
      text("Audio " + `${i + 1}`, 150, vspacing * i + 150)

      noStroke();
      // Changes the color depending on emotion 
      if (j == 0) {
        fill(color(241, 212, 101));
        ellipse(hspacing * j + 300, vspacing * i + 140, 9 * values[i][j] + 25);
        fill(0,0,0);
         text(values[i][j] , hspacing * j + 305, vspacing * i + 215);
        fill(0,0,0);
      } else if (j == 1) {
        fill(color(228, 60, 36));
        ellipse(hspacing * j + 300, vspacing * i + 140, 9 * values[i][j] + 25);
         fill(0,0,0);
         text(values[i][j] , hspacing * j + 305, vspacing * i + 215)
      } else if (j == 2) {
        fill(color(94, 148, 248));
        ellipse(hspacing * j + 300, vspacing * i + 140, 9 * values[i][j] + 25);
         fill(0,0,0);
         text(values[i][j] , hspacing * j + 305, vspacing * i + 215)
      } else if (j == 3) {
        fill(color(210,105,30));
        ellipse(hspacing * j + 300, vspacing * i + 140, 9 * values[i][j] + 25);
         fill(0,0,0);
         text(values[i][j] , hspacing * j + 305, vspacing * i + 215)
      }
      console.log(values[i][j]);
      
    }
    
   stroke(3); 

  line(450, 80, 450, displayHeight -50);
  line(750, 80, 750, displayHeight -50);
  line(1000, 80, 1000, displayHeight -50);
  noStroke();
  }








}



///comparisonData Vis lay out 

function compareViz() {
  background(169,169,169);
	fill(0,0,0)
  
	textStyle(BOLD);
 	textFont('HELVETICA', 25);
	text('YOUR AVERAGE EMOTIONAL RESPONSE VS. TOTAL USERS AVERAGE EMOTIONAL RESPONSE*', 750, 75)
  textFont('HELVETICA', 15);
  text('*BASED ON A SCALE FROM 0 - 10', 750, 107)
  textFont('Helvetica', 15);
  text('PRESS NEXT TO CONTINUE', displayWidth/2+580, displayHeight/2+425)
   textFont('HELVETICA', 20);
  text('CURRENT USER AVERAGE EMOTIONS', 450, 170)
  text('TOTAL USERS AVERAGE EMOTIONS', 1050, 175)
  stroke(0,0,0)
  strokeWeight(3); 
  line(100, 121, 1375, 121);
  line(750, 121, 750, displayHeight -50);
  noStroke();

  
/////labeling of circles//////////////
  
  
//currentUser////

  textStyle(BOLD);
   textFont('Helevetica', 18);
  	text('Fear\n', 325, 305)
    textStyle(NORMAL);
  	text(userFearAvg.toFixed(2), 325, 325)
  
  
  textStyle(BOLD);
   textFont('Helevetica', 18);
  	text('Anger\n', 325, 455)
    textStyle(NORMAL);
  	text(userAngerAvg.toFixed(2), 325, 475)
  
   	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Sadness\n', 325, 605)
    textStyle(NORMAL);
  	text(userSadnessAvg.toFixed(2), 325, 625)
   
  
  	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Neutral\n', 325, 755)
    textStyle(NORMAL);
  	text(userNeutralAvg.toFixed(2), 325, 775)
  
  //Total User
   	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Fear', 1180, 305)
    textStyle(NORMAL);
  	text(fearAvg.toFixed(2), 1180, 325)
  
  
 	 	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Anger\n', 1180, 455)
    textStyle(NORMAL);
  	text(angerAvg.toFixed(2), 1180, 475)
  
   	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Sadness\n', 1180, 605)
    textStyle(NORMAL);
  	text(sadnessAvg.toFixed(2), 1180, 625)
   
  
 	 	textStyle(BOLD);
   	textFont('Helevetica', 18);
  	text('Neutral\n', 1180, 755)
    textStyle(NORMAL);
  	text(neutralAvg.toFixed(2), 1180, 775)
  

/////Current user's circles////////
  	
  //fear
    fill(color(241, 212, 101));
    noStroke();
    ellipse(450,300,userFearAvg * 15);
   
    //anger
  	fill(color(228, 60, 36));
    ellipse(450,450,userAngerAvg * 15);
  
    //sadness
    fill(color(94, 148, 248));
    ellipse(450,600,userSadnessAvg *15);
  
    //neutral  
    fill(color(210,105,30));
    ellipse(450,750,userNeutralAvg *15 +10);
    
    
/////TOTAL users' circles////////
//let fearAvg, angerAvg, sadnessAvg, neutralAvg;
  
    //fear
    fill(color(241, 212, 101));
    noStroke();
    ellipse(1100,300,fearAvg *15);
   
    //anger
  	fill(color(228, 60, 36));
    ellipse(1100,450,angerAvg *15);
  
  //sadness
  fill(color(94, 148, 248));
  ellipse(1100,600,sadnessAvg *15);

  //neutral
  fill(color(210,105,30));
  ellipse(1100,750,neutralAvg *15);

}

/////////////////////////////////////////////////////////////////////////////

function displayComparisonData(data) {
  background(220);
  console.log('the dta', data.length);


  
// averages current user emotion for entire experience
  
  const UserData = JSON.parse(data[counter].data); 
  
  // console.log('the real data ', UserData.a1);
  
  //current user fear avg
   if(UserData.a1 === undefined) {
      // console.log("no");
    } else {
			userFear += UserData.a1[0];
    	userFearCount++;
    }
  
   if(UserData.a2 === undefined) {
      // console.log("no");
    } else {
			userFear += UserData.a2[0];
    	userFearCount++;
    }
  
   if(UserData.a3 === undefined) {
      // console.log("no");
    } else {
			userFear += UserData.a3[0];
    	userFearCount++;
    }
  
  
   if(UserData.a4 === undefined) {
      // console.log("no");
    } else {
			userFear += UserData.a4[0];
    	userFearCount++;
    }
  ///curent user anger avg
  
  
  if(UserData.a1 === undefined) {
      // console.log("no");
    } else {
			userAnger += UserData.a1[1];
      userAngerCount++;
    	
    }
  
   if(UserData.a2 === undefined) {
      // console.log("no");
    } else {
			userAnger += UserData.a2[1];
      userAngerCount++;
    	
    }
  
   if(UserData.a3 === undefined) {
      // console.log("no");
    } else {
		userAnger += UserData.a3[1];
    userAngerCount++;
    	
    }
  
  
   if(UserData.a4 === undefined) {
      // console.log("no");
    } else {
			userAnger += UserData.a4[1];
      userAngerCount++;
    	
    }
  
  
  ///current user sad avg 
  
  
  if(UserData.a1 === undefined) {
      // console.log("no");
    } else {
			userSadness += UserData.a1[2];
      userSadnessCount++;
    	
    }
  
   if(UserData.a2 === undefined) {
      // console.log("no");
    } else {
			userSadness += UserData.a2[2];
    	  userSadnessCount++;
    }
  
   if(UserData.a3 === undefined) {
      // console.log("no");
    } else {
			userSadness += UserData.a3[2];
      userSadnessCount++;
    }
  
  
   if(UserData.a4 === undefined) {
      // console.log("no");
    } else {
			userSadness += UserData.a4[2];
    	userSadnessCount++;
    }
  
  
  //current user neut avg 
  
   if(UserData.a1 === undefined) {
      // console.log("no");
    } else {
			userNeutral += UserData.a1[3];
    	userNeutralCount++;
    }
  
   if(UserData.a2 === undefined) {
      // console.log("no");
    } else {
			userNeutral += UserData.a2[3];
    	userNeutralCount++;
    }
  
   if(UserData.a3 === undefined) {
      // console.log("no");
    } else {
		userNeutral += UserData.a3[3];
    userNeutralCount++;
    }
  
  
   if(UserData.a4 === undefined) {
      // console.log("no");
    } else {
			userNeutral += UserData.a4[3];
    	userNeutralCount++;
    }

  userFearAvg = userFear/userFearCount;
  userAngerAvg = userAnger/	userAngerCount;
  userSadnessAvg = userSadness/	userSadnessCount;
  userNeutralAvg = userNeutral/	userNeutralCount;
  
  // console.log(userFearCount);
  // console.log("Current User Fear Avg:", userFearAvg);
  // console.log("Current User Anger Avg:", userAngerAvg);
  // console.log("Current User Sadness Avg:", userSadnessAvg);
  // console.log("Current User Neutral Avg:", userNeutralAvg);
  
  
/////TOTAL USER Averages of emotions////////////////
 		 for (let i = 0; i < [...Object.keys(data)].length; i++) {
       
    const realdata = JSON.parse(data[i].data);
    

    // console.log('the real data ', realdata.a1);

    //TOtal users fear avg
    if (realdata.a1 === undefined) {
      // console.log("no");
    } else {
      fear += realdata.a1[0];
      fearCount++;
    }

    if (realdata.a2 === undefined) {
      // console.log("no");
    } else {
      fear += realdata.a2[0];
      fearCount++;
    }

    if (realdata.a3 === undefined) {
      // console.log("no");
    } else {
      fear += realdata.a3[0];
      fearCount++;
    }


    if (realdata.a4 === undefined) {
      // console.log("no");
    } else {
      fear += realdata.a4[0];
      fearCount++;
    }

   
  ///Total users anger avg///

    if (realdata.a1 === undefined) {
      // console.log("no");
    } else {
      anger += realdata.a1[1];
      angerCount++;
     
    }

    if (realdata.a2 === undefined) {
      // console.log("no");
    } else {
      anger += realdata.a2[1];
      angerCount++;
     
    }

    if (realdata.a3 === undefined) {
      // console.log("no");
    } else {
      anger += realdata.a3[1];
      angerCount++;
    }

      if (realdata.a4 === undefined) {
        // console.log("no");
      } else {
        anger += realdata.a4[1];
        angerCount++;
      }

      ///Total users sadness avg

      if (realdata.a1 === undefined) {
        // console.log("no");
      } else {
        sadness += realdata.a1[2];
        sadnessCount++;
      

      }

      if (realdata.a2 === undefined) {
        // console.log("no");
      } else {
        sadness += realdata.a2[2];
        sadnessCount++;
        

      }

      if (realdata.a3 === undefined) {
        // console.log("no");
      } else {
        sadness += realdata.a3[2];
        sadnessCount++;
       

      }

      if (realdata.a4 === undefined) {
        // console.log("no");
      } else {
        sadness += realdata.a4[2];
        sadnessCount++;
   

      }

      ///Total users neutral avg
      if (realdata.a1 === undefined) {
        // console.log("no");
      } else {
        neutral += realdata.a1[3];
        neutralCount++;
        
      }

      if (realdata.a2 === undefined) {
        // console.log("no");
      } else {
        neutral += realdata.a2[3];
        neutralCount++;
       

      }

      if (realdata.a3 === undefined) {
        // console.log("no");
      } else {
        neutral += realdata.a3[3];
        neutralCount++;
      }
       
      if (realdata.a4 === undefined) {
        // console.log("no");
      } else {
        neutral += realdata.a4[3];
        neutralCount++;
    }

 }
    fearAvg = fear / fearCount ;
    angerAvg = anger / angerCount;
    sadnessAvg = sadness /sadnessCount;
    neutralAvg = neutral / neutralCount;
    console.log("Total fear avg:", fearAvg);
    // console.log("Total anger avg:", angerAvg);
    // console.log("Total sadness avg:", sadnessAvg);
    // console.log("Total neutral avg:", neutralAvg);
    // console.log(fearCount);
		// console.log(angerCount);
		// console.log(sadnessCount);
    // console.log(neutralCount);
    // console.log("fear:", fear);


}
 		


  