
///SwitchState Variables
int prevReading = 0 ; // prevous reading for neutralButton
int prevReading1 = 0 ; // prevous reading for navButton
int prevReading2 = 0 ; // prevous reading for playButton
int prevReading3 = 0 ; // prevous reading for submitButton


int pont1 , pont2, pont3;
int  neutralButton, nextButton, playButton, submitButton;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
 
  pinMode(2,INPUT);
  pinMode(3,INPUT);
  pinMode(4,INPUT);
  pinMode(5,INPUT);



}



void loop() {
  // put your main code here, to run repeatedly:
  neutralButton = digitalRead(2);
  nextButton = digitalRead(3);
  playButton = digitalRead(4);
  submitButton = digitalRead(5);
  
  pont1 = map( analogRead(A0),0, 1023, 0, 10); //Fear 
  pont2 = map(analogRead(A2),0, 1023, 0, 10); //anger
  pont3 = map(analogRead(A5),0, 1023, 0, 10); //sadness


if (neutralButton == HIGH && prevReading == LOW) {
    prevReading = neutralButton;

  } else if (neutralButton == HIGH && prevReading == HIGH){
    neutralButton = LOW;
    }
    else if (neutralButton == LOW && prevReading == HIGH) {
        prevReading = neutralButton;
    }

    if (nextButton == HIGH && prevReading1 == LOW) {
         prevReading1 = nextButton;

  } else if (nextButton == HIGH && prevReading1 == HIGH) {
    nextButton = LOW;
    }
    else if (nextButton == LOW && prevReading1 == HIGH) {
        prevReading1 = nextButton;
    }

    if (playButton == HIGH && prevReading2 == LOW) {
       prevReading2 = playButton;
       }
    else if (playButton == HIGH && prevReading2 == HIGH) {
    playButton = LOW;
    }
    
    else if (playButton == LOW && prevReading2 == HIGH) {
        prevReading2 = playButton;
    }
    
    if(submitButton == HIGH && prevReading3 == LOW){
     prevReading3 = submitButton;
     }
     
     else if (submitButton == HIGH && prevReading3 == HIGH){
    submitButton = LOW;
    }
    
    else if (submitButton == LOW && prevReading3 == HIGH) {
        prevReading3 = submitButton;
    }





 Serial.print(pont1);
 Serial.print(",");
 Serial.print(pont2);
 Serial.print(",");
 Serial.print(pont3);
 Serial.print(",");
 Serial.print(neutralButton);
 Serial.print(",");
 Serial.print(nextButton);
 Serial.print(",");
 Serial.print(playButton);
 Serial.print(",");
 Serial.println(submitButton);



}
