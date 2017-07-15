//Vector
function Vector (X,Y)
{
   this.x=X;
   this.y=Y;
}

// Define celestial objects as object
// Mass in KG, Radius in KM, Angle in 0-2pi, DistacetoSun in KM, RSpeed in m/s,PhiSpeed in Earth Days/orbit,
function CelestialObject(Name,Mass,Place,Speed)
{
   // Properties
   this.name=Name;
   this.mass=Mass;
   this.place = Place;
   this.speed = Speed;
}

function Move()
{
  //Compute gravitational pull
  var Distance = ((Earth.place.x - Sun.place.x)^2 + (Earth.place.y - Sun.place.y)^2)^(0.5);
  var Strength = 0.0000001 *  Earth.mass * Sun.mass / (Distance^2) ;
  // New speed
  Earth.speed.x += Strength * ((Sun.place.x - Earth.place.x)/Distance) / Earth.mass;
  Sun.speed.x += Strength * ((Earth.place.x - Sun.place.x)/Distance) / Sun.mass;
  Earth.speed.y += Strength * ((Sun.place.y - Earth.place.y)/Distance) / Earth.mass;
  Sun.speed.y += Strength * ((Earth.place.y - Sun.place.y)/Distance) / Sun.mass;
  // New place
  Earth.place.x += Earth.speed.x;
  Sun.place.x += Sun.speed.x;
  Earth.place.y += Earth.speed.y;
  Sun.place.y += Sun.speed.y;
}

function PrintSpecs(ToPrint)
{
  console.log(ToPrint.name + " | Location: X= " + Math.round(ToPrint.place.x) + " Y= " + Math.round(ToPrint.place.y) + " | Speed: X= " + Math.round(ToPrint.speed.x) + " Y= " + Math.round(ToPrint.speed.y));
}
