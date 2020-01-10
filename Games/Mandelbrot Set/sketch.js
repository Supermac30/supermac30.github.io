var iterations = 50;
var expo = 2;
var drawn = false;
var startR = -2; // start value in the reals
var startI = -2; // start value in the imaginaries
var endR = 2; // end value in the reals
var endI = 2; // end value in the imaginaries
var uppR; // units per pixel in the reals
var uppI; // units per pixel in the imaginaries

function setup() {
    var cnv = createCanvas(500, 500);
    var x = (windowWidth - width) / 2 + 100;
    var y = (windowHeight - height) * 2 / 5 + 30;
    cnv.position(x, y);
    uppR = width/(endR-startR);
	uppI = width/(endI-startI);
    console.log("A and D for iterations");
    console.log("Left and Right for inc");
}

function draw() {
    if (!drawn) {
        drawn = true;
        for (let i = 0; i <= width; i++) {
            for (let j = 0; j <= height; j++) {
                stroke(255-255*(test(i, j)/iterations));
                point(i, j);
            }
        }
    }
}

function test(a, b) {
    var at = math.complex(0, 0);
    var c = math.complex((a/uppR)+startR, (b/uppI)+startI);
    for (let i = 0; i < iterations; i++) {
        at = math.add(math.pow(at, expo), c);
        if (math.sqrt(at.im*at.im+at.re*at.re) >= 2) {
            return i;
        }
    }
    return iterations;
}

function editSite() {
    var attribs = document.getElementById("attribs");
    iterations = parseInt(attribs.elements[0].value);
    startR = parseFloat(attribs.elements[1].value);
    endR = parseFloat(attribs.elements[2].value);
    startI = parseFloat(attribs.elements[3].value);
    endI = parseFloat(attribs.elements[4].value);
    expo =  parseFloat(attribs.elements[5].value);
    uppR = width/(endR-startR);
	uppI = width/(endI-startI);
    drawn = false;
}
