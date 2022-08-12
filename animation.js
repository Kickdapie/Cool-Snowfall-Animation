//allows you to access and edit the canvas from html
const canvas = document.getElementById("Area");
const ctx = canvas.getContext("2d");

var xcor = 100;
var ycor = 100;
var xcorr = 150;
var ycorr = 50;
var xc = 200;
var yc = 200;
var xco = 500;
var yco = 50;
var rx = Math.random() * 100;
var ry = 50;
var total = "";
var totall = "";
var intlist = [];
var ylist = [];

//makes sure there are more than 10 small circles
var smalls = Math.random() * 50;
if (smalls < 10){
    smalls = Math.random() * 25;
}
//creates the intial x-coordiantes of the small circles
for (var o = 0; o <= smalls; o++){
    rx = Math.random() * canvas.width;
    intlist.push(rx);
    ylist.push(50);
}


//resets the screen
function clearScreen(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, canvas.clientWidth, canvas.height); 
}

//draws the circle
function drawCircle(){
    var line  = "";
    var big = 7;
    
    //builds the top portion of the circle
    for( var i = 3; i <= big; i += 2){
        var small = i;
        var dif = (big - small)/2;
        //makes the spaces before the marks
        for (var y = dif; y > 0; y--){
            line += " ";
        }
        for(var k = 0; k < i; k++){
            line += "!";
        }
        for (var y = dif; y > 0; y--){
            line += " ";
        }
        //adds each line into a variable
        total += line + "\n";
        //resets line to remake it for the next line
        line = "";
    }

    //builds the bottom portion of the the circle
    for (var e = big - 2; e >= 3; e -= 2){
        var diff = (7 - e)/2;
        for (var h = diff; h > 0; h--){
            line += " ";
        }
        for(var k = 0; k < e; k++){
            line += "!";
        }
        for (var h = diff; h > 0; h--){
            line += " ";
        }
        total += line + "\n";
        line = "";
    }


    //sets the font of the text
    ctx.font = 'bold 25px Arial';
    //sets the font color
    ctx.fillStyle = 'black';
    //splits total into individual lines and makes into an array
    var lines = total.split('\n');
    var lineheight = 10;

    //prints each line individually
    for (var p = 0; p < lines.length; p++){
        ctx.fillText(lines[p], xcor, ycor + (p*lineheight) );
    }

    for (var p = 0; p < lines.length; p++){
        ctx.fillText(lines[p], xcorr, ycorr + (p*lineheight) );
    }
        
    for (var p = 0; p < lines.length; p++){
        ctx.fillText(lines[p], xc, yc + (p*lineheight) );
    }
    for (var p = 0; p < lines.length; p++){
        ctx.fillText(lines[p], xco, yco + (p*lineheight) );
    }
    total = "";
}

//draws smaller circles
function drawSmall(){
    var line  = "";
    var big = 5;
    
    //builds the top portion of the circle
    for( var i = 3; i <= big; i += 2){
        var small = i;
        var dif = (big - small)/2;
        //makes the spaces before the marks
        for (var y = dif; y > 0; y--){
            line += " ";
        }
        for(var k = 0; k < i; k++){
            line += "!";
        }
        for (var y = dif; y > 0; y--){
            line += " ";
        }
        //adds each line into a variable
        totall += line + "\n";
        //resets line to remake it for the next line
        line = "";
    }

    //builds the bottom portion of the the circle
    for (var e = big - 2; e >= 3; e -= 2){
        var diff = (5 - e)/2;
        for (var h = diff; h > 0; h--){
            line += " ";
        }
        for(var k = 0; k < e; k++){
            line += "!";
        }
        for (var h = diff; h > 0; h--){
            line += " ";
        }
        totall += line + "\n";
        line = "";
    }

    //shows the small circles
    ctx.font = 'bold 15px Arial';
    ctx.fillStyle = 'black';
    var lines = totall.split('\n');
    var lineheight = 10;

    

    //intially starts the smalls
    for (var f = 0; f < intlist.length; f++){
        
        for (var p = 0; p < lines.length; p++){
            ctx.fillText(lines[p], intlist[f], ylist[f] + (p*lineheight) );
        }
        //gives them a random sped and makes them move back and forth
        var sped = Math.random();
        if (sped < 0.5){
            sped -= 0.75;
        }
        intlist[f] = intlist[f] + sped * 8;
        ylist[f] = ylist[f] + Math.random() * 8;
        //makes sure they don't move out of canvas
        if (intlist[f] > canvas.width - 15){
            intlist[f] = Math.random() * canvas.width;
        }
        if (ylist[f] > canvas.height - 15){
            ylist[f] = 50;
            intlist[f] = Math.random() * canvas.width;
        }
    }
    
    totall = "";
}

//makes sure the circles don't go outside the canvas
function areaCheck(){
    if(ycor >= canvas.height - 15){
        ycor = 0;
    }
    if(xcor >= canvas.width - 15){
        xcor = 0;
    }
    if(ycorr >= canvas.height - 15){
        ycorr = 0;
    }
    if(xcorr >= canvas.width - 15){
        xcorr = 0;
    }
    if(yc >= canvas.height - 15){
        yc = 0;
    }
    if(xc >= canvas.width - 15){
        xc = 0;
    }
    if(yco >= canvas.height - 15){
        yco = 50;
    }
    if(xco < 0 - 15){
        xco = 500;
    }
    /*if(ry >= canvas.height - 15){
        ry = 50;
    }
    if(rx >= canvas.width - 15){
        rx = Math.random() * 100;
    }*/
    
}

function addSpeed(){
    xcor += 20;
    ycor += 20;
    xcorr += 30;
    ycorr += 10;
    xc += 40;
    yc += 40;
    xco -= 25;
    yco += 20;
    //ry += Math.random() * 10;
    //rx += 5;
}

function drawAni(){
    setTimeout(drawAni, 1000/50);
    
    clearScreen();
    areaCheck();
    drawCircle();
    drawSmall();
    addSpeed();
}

drawAni();
