 function setup(){
        canvas=createCanvas(480, 380);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
    } 
    function draw() {
        image(video, 0, 0, 600, 500);
    }
    function start(){
        objectDetector=ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML="Status : Detecting Objects";
        document.getElementById(input_box).value
    }
    function modelLoaded(){
        console.log("model loaded");
        status=true;
    }