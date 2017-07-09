
// Write log
function writelog(String){
  return document.getElementById("textlog").innerHTML + "<br>" + String;
}

//Vector
function Vector (X,Y)
{
   this.x=X;
   this.y=Y;
}

// Define celestial objects as object
// Mass in KG, Radius in KM, Angle in 0-2pi, DistacetoSun in KM, RSpeed in m/s,PhiSpeed in Earth Days/orbit, 
function CelestialObject(Name,Mass,Location,Speed)
{
   // Properties
   this.name=Name;
   this.mass=Mass;
   this.place = Location;
   this.speed = Speed;
}

function Move()
{
  //Compute gravitational pull
  var Strength = (1 *  Earth.mass * Sun.mass) / ((Earth.place.x - Sun.place.x)^2 + (Earth.place.y - Sun.place.y)^2)^.5;
  // New speed
  Earth.speed.x += Strength * Math.sin(Earth.place.x - Sun.place.x) / Earth.mass;
  Sun.speed.x += Strength * Math.sin(Sun.place.x - Earth.place.x) / Sun.mass;
  Earth.speed.y += Strength * Math.cos(Earth.place.y - Sun.place.y) / Earth.mass;
  Sun.speed.y += Strength * Math.cos(Sun.place.y - Earth.place.y) / Sun.mass;
  // New place
  Earth.place.x += Earth.speed.x;
  Sun.place.x += Sun.speed.x;
  Earth.place.y += Earth.speed.y;
  Sun.place.y += Sun.speed.y;
}

function PrintVectors(ToPrint1,ToPrint2)
{
  document.getElementById("textlog").innerHTML = writelog("Sun | X: " + Math.round(ToPrint1.x) + " Y: " + Math.round(ToPrint1.y));
  document.getElementById("textlog").innerHTML = writelog("Earth | X: "+ Math.round(ToPrint2.x) + " Y: " + Math.round(ToPrint2.y));
}

//And... action

Earth = new CelestialObject("Earth",1000,new Vector(300,200),new Vector(0,10));
Sun = new CelestialObject("Sun",1000,new Vector(500,200),new Vector(0,-10));
PrintVectors(Sun.place,Earth.place);
PrintVectors(Sun.speed,Earth.speed);
Move();
PrintVectors(Sun.place,Earth.place);
PrintVectors(Sun.speed,Earth.speed);
Move();
PrintVectors(Sun.place,Earth.place);
PrintVectors(Sun.speed,Earth.speed);