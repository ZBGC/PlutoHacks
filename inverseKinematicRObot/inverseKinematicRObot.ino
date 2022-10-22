#include <Servo.h>
#include <math.h>

int potPin1 = A0, potPin2 = A1;
int shoulderPin = 7;
int elbowPin = 8;

int trigPin = 12;
int echoPin = 11;
long duration;
int distance;

Servo shoulderServo;
Servo elbowServo;

int potVal1, potVal2;

int shoulderPos, elbowPos;
void setup() {
  // put your setup code here, to run once:
  shoulderServo.attach(shoulderPin);
  elbowServo.attach(elbowPin);

  pinMode(potPin1,INPUT);
  pinMode(potPin2,INPUT);

  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);

  Serial.begin(9600);
  int dist = ((distanceCalc()*10)+40);
  Serial.println(dist);
  moveToPos(dist ,100,shoulderServo,elbowServo);
}

void loop() {
  
  
}

float moveToPos(int x, int y, Servo a, Servo b){
  int lengthOne = 110;
  int lengthTwo = 150;
  int originX = 0;
  int originY = 180;

  
  

  float r = sqrt( pow(x - originX,2) + pow(y-originY,2) );
  
  
  float alphaOne = radToDeg(asin(x/r));
  float alphaTwo = radToDeg(acos( (pow(lengthTwo,2) - pow(lengthOne,2) - pow(r,2)) / (-2*lengthOne*r) ));
  int thetaOne = alphaOne - alphaTwo;


  float phi = radToDeg(acos( (pow(r,2) - pow(lengthOne,2) - pow(lengthTwo,2)) / (-2*lengthOne*lengthTwo)*-1));

  int thetaTwo = 180 - phi;

  //printValues(r, alphaOne, alphaTwo, thetaOne, phi, thetaTwo);
  a.write(thetaOne);
  b.write(thetaTwo);
}

float radToDeg(float x){
  double degValue = x * (180/3.141592653589793);
  return degValue;
}

void printValues(float a, float b, float c, int d, float e, int f){
  Serial.println("-------------------------");
  Serial.print("r: ");
  Serial.println(a);
  Serial.print("Alpha One: ");
  Serial.println(b);
  Serial.print("Alpha Two: ");
  Serial.println(c);
  Serial.print("Phi: ");
  Serial.println(e);

  Serial.print("Theta One: ");
  Serial.println(d);
  Serial.print("Theta Two ");
  Serial.println(f);
}
int coordinateInputX(){
  Serial.println("X coordinate: ");
  while(Serial.available()==0){}
  int xCoord = Serial.parseInt();
  
  return xCoord;
}
int coordinateInputY(){
  Serial.println("Y coordinate: ");
  while(Serial.available()==0){}
  int yCoord = Serial.parseInt();

  return yCoord;
}

float distanceCalc(){
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = (duration*0.034)/2;
  return distance;
}

float average(int arr[], int items){
  long sum = 0;
for(int i = 0; i < sizeof(arr); i++){
  sum+=arr[i];
  }

  return sum/items;
}
