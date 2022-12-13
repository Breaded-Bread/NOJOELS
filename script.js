var mouseX = 0;
var mouseY = 0;


function setBackground() {
    document.body.style.backgroundColor = "#e6ffe6";
}

function createCircle() {
    var circle = document.createElement("div");
    circle.style.width = "0px";
    circle.style.height = "0px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "#0000ff";
    circle.style.position = "absolute";
    circle.style.top = mouseY + "px";
    circle.style.left = mouseX + "px";
    document.body.appendChild(circle);
    return circle;
}

function growCircle(circle) {
    var radius = 0;
    var grow = setInterval(function() {
        radius++;
        circle.style.width = radius * 2 + "px";
        circle.style.height = radius * 2 + "px";
        if (radius >= 100) {
            clearInterval(grow);
            shrinkCircle(circle);
        }
    }, 10);
}

function shrinkCircle(circle) {
    var radius = 100;
    var shrink = setInterval(function() {
        radius--;
        circle.style.width = radius * 2 + "px";
        circle.style.height = radius * 2 + "px";
        if (radius <= 0) {
            clearInterval(shrink);
            document.body.removeChild(circle);
        }
    }, 10);
}

function bamboozle() {
    var circle = createCircle();
    growCircle(circle);
    console.log("bamboozle");
}

function doSomething() {
    setBackground();
    setInterval(bamboozle, 10);
}

doSomething();
// nothing
//why are you in my repl tho
// don't worry about it man
// im not joel
// i follow all the rules

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});
// lol check out the website
// move you mouse over it
//not anymore they just changed. No joels or charles'
//can't my discrict is cringe. I'd have to push to GitHub and wait a bit then do it.