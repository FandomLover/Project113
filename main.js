function preload() {

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(200, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video, 240, 150, 220, 200);
    fill(225, 0, 0);
    stroke(225, 0, 0);
    circle(50, 50, 80);
    circle(580, 50, 80);
    circle(50, 430, 80);
    circle(580, 430, 80);
    fill(225, 0, 0);
    stroke(225, 0, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(570, 90, 20, 300);
}

function take_snapshot()
{
    save('your_snapshot.png');
}
