/*
//var circleX = 0;
var r = 0;
var b = 255;


function setup() {
    createCanvas(600, 400);

}

function draw() {
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}

//function draw() {
// background(250, 250, 100);

//  fill(250, 200, 200);
//ellipse(circleX, 200, 80, 80);
// circleX = circleX + 1;
//  ellipse(mouseX, mouseY, 100, 100, 100);

// fill(200, 250, 200);
// rect(400, 100, 50, 50);

/*rect(50, 50, 100, 150);
noFill();
// fill(0, 100, 0);
stroke(255, 0, 0);
//line(0, 50, 400, 300);
fill(255, 0, 0);
// nostroke();
// stroke(255);
ellipse(100, 100, 50, 100);



//function mousePressed() {
//  background(250, 250, 100);

//}


var spot = {
    x: 100,
    y: 50,
};
var col = {
    r: 255,
    g: 0,
    b: 0
};

function setup() {
    createCanvas(600, 400);
    background(0);
};

function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    spot.x = random(0, width);
    spot.y = random(0, height);
    noStroke();
    fill(col.r, col.g, col.b, 100);
    ellipse(spot.x, spot.y, 24, 24);
}

var r = 0;
var b = 0;
var g = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    r = map(mouseX, 0, windowWidth, 0, 255);
    b = map(mouseX, 0, windowHeight, 255, 0);
    g = map(mouseY, 0, windowWidth, 0, 255);
    background(r, b, g);
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

col = {
    r: 0,
    b: 0,
    g: 0,
};

spot = {
    x: 0,
    y: 0,
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(40);
}

function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    spot.x = random(0, windowWidth);
    spot.y = random(0, windowHeight);
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(spot.x, spot.y, 30, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(40);
}

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);
    for (var x = 0; x <= innerWidth; x += 50) {
        for (var y = 0; y <= innerHeight; y += 50) {
            fill(random(255), 0, random(255));
            ellipse(x, y, 25, 25);
        }
    }

}

function setup() {
    var canvas = createCanvas(200, 200);
    background(0);
    canvas.drop(gotFile);
}

function gotFile(file) {
    createP(file.name + " " + file.size);
    var img = createImg(file.data);
    img.size(100, 100);
    Image(img, 0, 0, width, height);

}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('#canvasp');
}

function draw() {
    background(0);
    ellipse(200, 200, random(100), random(100));
}

function setup() {
    createCanvas(200, 200);
}

function draw() {
    paragraph = selectAll('p');
    for (var i = 0; i < paragraph.length; i++) {
        paragraph[i].mouseOver(highlight);
        paragraph[i].mouseOver(unhighlight);


    }

    function highlight() {
        this.style('padding', '16pt');
        this.style('background-color', '#F0F');
    }

    function unhighlight() {
        this.style('padding', '8pt');
        this.style('background-color', '#ccc');

    }

}

var textbox;
var slider;
var paragraph;

function setup() {
    noCanvas();
    paragraph = createP('starting text');
    textbox = createInput('enter text');
    slider = createSlider(10, 60, 16);
    // textbox.changed(dosomething);
    textbox.input(dosomething);

    slider.input(updatesize);
}

function dosomething() {
    paragraph.html(textbox.value());
}

function updatesize() {
    paragraph.style("font-size", slider.value() + "pt");
}
*/
function setup() {
    createCanvas(600, 600);
    sun = new planet(50, 0, 0, random(TWO_PI));
    sun.spawnMoons(5, 1);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    sun.show();
    sun.orbit();


}