//Vector
function Vector (X,Y)
{
   this.x=X;
   this.y=Y;
}

// Define celestial objects as object
// Mass in KG, Radius in KM, Angle in 0-2pi, DistacetoSun in KM, RSpeed in m/s,PhiSpeed in Earth Days/orbit,
function CelestialObject(Name,Mass,ColorCode,Place,Speed)
{
   // Properties
   this.name=Name;
   this.mass=Mass;
   this.colorcode=ColorCode;
   this.place = Place;
   this.speed = Speed;
}

function BodyMovedBy(Body1,Body2){
  //Compute gravitational pull
  // Note that Force has been adjusted sith the TimeFactor to incorporate numerical integration correctly
  var Distance = Math.pow(Math.pow((Body1.place.x - Body2.place.x),2) + Math.pow((Body1.place.y - Body2.place.y),2),0.5); // m
  var Force = G *  Body1.mass * Body2.mass / Math.pow(Distance,2) * TimeFactor; // m kg s^-2
  Body1.speed.x += (Force / Body1.mass) * ((Body2.place.x - Body1.place.x) / Distance);
  Body1.speed.y += (Force / Body1.mass) * ((Body2.place.y - Body1.place.y) / Distance);
  return Body1;
}

function Move()
{
  // Clear the frame
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  for(var i=0;i<SolarSystem.length;i++){
    for(var j=0;j<SolarSystem.length;j++){
      if(i!=j){
        SolarSystem[i].speed = BodyMovedBy(SolarSystem[i],SolarSystem[j]).speed;
      }
    }
    SolarSystem[i].place.x += SolarSystem[i].speed.x * TimeFactor;
    SolarSystem[i].place.y += SolarSystem[i].speed.y * TimeFactor;
  }
  for(i=0;i<SolarSystem.length;i++){
    PrintSpecs(SolarSystem[i]);
  }
  Do_a_Frame();
}

function PrintSpecs(ToPrint)
{
  console.log(ToPrint.name + " | Location: X= " + Math.round(ToPrint.place.x) + " Y= " + Math.round(ToPrint.place.y));
}
