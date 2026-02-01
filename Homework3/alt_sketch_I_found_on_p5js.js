const planets = [
  {name : "Mercury", size : 4, x : 50, y : 200, colour: "teal"},
  {name : "Venus", size : 9, x : 175, y : 200, colour: "brown"},
  {name : "Earth", size : 10, x : 300, y : 200, colour: "green"},
  {name : "Mars", size : 5, x : 425, y : 200, colour: "red"},
  {name : "Jupiter", size : 110, x : 550, y : 200, colour: "sienna"},
  {name : "Saturn", size : 95, x : 675, y : 200, colour: "pink"},
  {name : "Uranus", size : 40, x : 800, y : 200, colour: "blue"},
  {name : "Neptune", size : 40, x : 925, y : 200, colour: "cyan"}
];

function setup() {
  createCanvas(1000, 600);

  textAlign(CENTER);
  textSize(20);
  
  //console.log(planets)

}

function draw() {
  background(51);
  fill(255);
  
  planets.forEach(function(planet, index){
    console.log(`At index ${index} we have the planet is ${planet}.`);
    push();
    fill (planet["colour"]);
    circle(planet["x"], planet["y"], planet["size"]);
    pop();
    text(planet["name"], planet["x"], planet["y"]+100);
    
  });
  
  
  /*/
  planets.forEach(function(planet, index){
    console.log(`At index ${index} we have the planet is ${planet}.`);
    push();
    fill (planet["colour"]);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    circle(planet["x"], planet["y"], planet["size"]);
    pop();
    text(planet["name"], planet["x"], planet["y"]+100);
    
  });
  //*/
  
}