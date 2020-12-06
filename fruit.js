img ="";
status= "";
objects = [];
function preload()
{
  img = loadImage("fruit_basket_image.jpg");
}
function setup()
{
  canvas = createCanvas(650,450);
  canvas.position(380,450);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
function draw()
{
   image(img,0,0,650,450);
}
function modelLoaded()
{
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects = results;
  }
}