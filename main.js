nose_x = 0;
nose_y = 0;
function preload(){

}
function setup(){
    canvas =createCanvas(400,400);
    canvas.center();
video = createCapture(VIDEO);
video.size(400 , 400);
video.hide()
poseNet=ml5.poseNet(video , modelloaded);
poseNet.on('pose' , got_poses);
}
function draw(){
image(video,0,0, 400 , 400);
fill(221,160,221)
stroke(221,160,221)
circle(nose_x , nose_y , 20);
}
function take_snapshot(){
    save('apicture.png')
}
function modelloaded(){
    console.log("poseNet is initialized")
}
function got_poses(results){
    if(results.length>0)
{
    console.log(results);
    nose_x =results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log ("nose_x = " + nose_x);
    console.log("nose_y = " + nose_y);
}
}

