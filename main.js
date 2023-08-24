function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
}



function draw(){
    image(video,0,0,640,480);
   
    circle(200,100,80);
    ellipse(300,400,100);
    rect(400,300,90,50,)


}


