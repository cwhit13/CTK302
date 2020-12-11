// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var humidity = 0; //define it to zero because openweathermap sometimes crashes
var name;
var washington;
var f;


function setup() {
  createCanvas(800, 400);
  washington = loadImage("assets/washington.jpeg");
  f = loadFont ("assets/font.ttf");
  textFont (f, 20);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Washington,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=a4eb7fb717722cd777efc68e847b15da'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  imageMode(CENTER);

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;



}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      image(washington, width/2, height/2, width, height);
      fill('white');
      textFont(f);
      textSize(50);
      text("What is the weather in " + weather.name + "?", 20, 50);
        textSize(30);
      text("windspeed is " + windspeed, 20, 110);
      text("humidity is " + humidity +'%', 20, 160);
      text("temperature is " + temperature, 20, 210);



      // cloud
      fill(255, humidity*2.5);
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x-50, 320, 190, 120);
      ellipse(x+50, 350, 220, 70);

      // move the cloud's x position
      x = x + windspeed/2;
      if (x > width) x = 0;

      break;

  }
}
