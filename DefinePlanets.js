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
  // Clear the frame
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  //Compute gravitational pull
  // Note that Force has been adjusted sith the TimeFactor to incorporate numerical integration correctly
  var Distance = Math.pow(Math.pow((Earth.place.x - Sun.place.x),2) + Math.pow((Earth.place.y - Sun.place.y),2),0.5); // m
  var Force = G *  Earth.mass * Sun.mass / Math.pow(Distance,2) * TimeFactor; // m kg s^-2
  // New speed
  Earth.speed.x += (Force / Earth.mass) * ((Sun.place.x - Earth.place.x) / Distance);
  Sun.speed.x += (Force / Sun.mass) * ((Earth.place.x - Sun.place.x) / Distance);
  Earth.speed.y += (Force / Earth.mass) * ((Sun.place.y - Earth.place.y) / Distance);
  Sun.speed.y += (Force / Sun.mass) * ((Earth.place.y - Sun.place.y) / Distance);
  // New place
  Earth.place.x += Earth.speed.x * TimeFactor;
  Sun.place.x += Sun.speed.x  * TimeFactor;
  Earth.place.y += Earth.speed.y  * TimeFactor;
  Sun.place.y += Sun.speed.y  * TimeFactor;
  PrintSpecs(Sun);
  PrintSpecs(Earth);
  Do_a_Frame();
}

function PrintSpecs(ToPrint)
{
  console.log(ToPrint.name + " | Location: X= " + Math.round(ToPrint.place.x) + " Y= " + Math.round(ToPrint.place.y));
}
