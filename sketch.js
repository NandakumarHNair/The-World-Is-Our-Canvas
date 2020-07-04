var color;
var database;
var position;
var positionRef;

var colorX;
var colorY;

var trajectory = [];

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    positionRef = database.ref("Paint/Position");
    positionRef.on("value", read, error);


}

function read(data){
    position = data.val();
    colorX = position.x;
    colorY = position.y;
    //console.log(colorX);
}

function error(){
    console.log("There is an error in database");
}

function draw(){
    background("black"); 
}

function mouseDragged(){
    positionRef.update({
        'x' : mouseX,
        'y' : mouseY
    });

    fill ("white");
    strokeWeight(3);

    var mousePosition = [colorX, colorY];
    trajectory.push(mousePosition);

    for(var i=0; i < trajectory.length; i++){
        console.log("no problems detected in function mouse dragged");
        line(trajectory[i][0], trajectory[i][1], trajectory[i][0], trajectory[i][1]);
    }
}

function mouseReleased(){
    trajectory = [];
    //background("black");
}

    

