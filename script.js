var mouseX = 0;
var mouseY = 0;


function setBackground() {
    document.body.style.backgroundColor = "rgb(0,0,0)";
}

var storedCircles = [];
function newCircle(){
    if (storedCircles.length == 0) {
        return document.createElement("div");
    }
    return storedCircles.pop();
}

function deleteCircle(circle) {
    circle.style.backgroundColor = "rgba(0, 0, 0, 0)";
    storedCircles.push(circle);
}
// if it ever doesn't work check the console
// either someone is working on it
// or there is another error
function createCircle() {
    var circle = newCircle();
    // circle.globalAlpha = 0.2;
    circle.style.width = "0px";
    circle.style.height = "0px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "rgba(255, 255, 255, 0.075)";
    circle.style.position = "absolute";
    circle.style.top = mouseY + "px";
    circle.style.left = mouseX + "px";
    document.body.appendChild(circle);
    return circle;
} // in tools there is a chat feature <==

function setX(element, x){
    element.style.left = x + "px";
}
function getX(element){
    return parseInt(element.style.left.slice(0, -1));
}

function setY(element, y){
    element.style.top = y + "px";
}
function getY(element){
    return parseInt(element.style.top.slice(0, -1));
}

function growCircle(circle) {
    var radius = 10;
    var grow = setInterval(function() {
        radius++;
        circle.style.width = radius * 2 + "px";
        circle.style.height = radius * 2 + "px";
        setX(circle, getX(circle) - 1);
        setY(circle, getY(circle) - 1);
        if (radius >= 30) {
            clearInterval(grow);
            shrinkCircle(circle);
        }
    }, 15);
}

function shrinkCircle(circle) {
    var radius = 30;
    var shrink = setInterval(function() {
        radius--;
        circle.style.width = radius * 2 + "px";
        circle.style.height = radius * 2 + "px";
        setX(circle, getX(circle) + 1);
        setY(circle, getY(circle) + 1);
        if (radius <= 0) {
            clearInterval(shrink);
            document.body.removeChild(circle);
        }
    }, 15);
}

function bamboozle() {
    var circle = createCircle();
    growCircle(circle);
    console.log("bamboozle");
}

function Lerp(a, b, t) {
    return a * t + b * (1-t);
}

function min(a, b) {
    if (a < b)
        return a;
    return b;
}

setBackground();
document.addEventListener("mousemove", function(event) {
    // pixels betwen circles
    let detail = 12;
    // max amount of circles spawned per frame
    // creating them seems to be the main cause of lag
    // so it's quite small
    let maxDetail = 3;
    let oldX = mouseX;
    let oldY = mouseY;
    let newX = event.clientX;
    let newY = event.clientY;
    let length = (newX - oldX) * (newX - oldX) + (newY - oldY) * (newY - oldY);
    length = Math.sqrt(length);
    detail = Math.ceil(length / detail);
    detail = min(detail, maxDetail);
    for (let i = 0; i < detail; i++) {
        mouseX = Lerp(oldX, newX, (i + 1) / detail);
        mouseY = Lerp(oldY, newY, (i + 1) / detail);
        bamboozle();
    }
    mouseX = event.clientX;
    mouseY = event.clientY;
});
