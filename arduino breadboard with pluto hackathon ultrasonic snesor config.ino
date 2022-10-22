int trigPin = 12;
int echoPin = 11;

int buzzer = 5;
int ledPin = 6;
int pingTravelTime;
long duration;
int distance;
int safetyDistance;


void setup() {
  // put your setup code here, to run once:
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);
pinMode(buzzer, OUTPUT);
Serial.begin(9600);

}


void loop() {
Serial.println(distanceCalc());

if (distanceCalc() <= 50){
  digitalWrite(buzzer, HIGH);
  delay(25);
  digitalWrite(buzzer,LOW);
  delay(25);
}
else if (distanceCalc() <= 100){
  digitalWrite(buzzer, HIGH);
  delay(50);
  digitalWrite(buzzer,LOW);
  delay(50);
}
else if (distanceCalc() <= 200){
  digitalWrite(buzzer, HIGH);
  delay(100);
  digitalWrite(buzzer,LOW);
  delay(100);
}
else if (distanceCalc() <= 201){
  digitalWrite(buzzer, HIGH);
  delay(150);
  digitalWrite(buzzer,LOW);
  delay(150);
}
else{
    digitalWrite(buzzer, LOW);
}
//else if (distanceCalc() <= 100){
 // delay(333);
//  digitalWrite(buzzer, HIGH);
//}

// Prints the distance on the Serial Monitor

}
float distanceCalc(){
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

    // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);

  // Calculating the distance
  distance= duration*0.034/2;
  return distance;
}
