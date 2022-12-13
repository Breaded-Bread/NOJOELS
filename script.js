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
        if (radius >= 30) {
            clearInterval(grow); // WHAT DID YOU DO
            shrinkCircle(circle); // nevermind it was my falt mb
        }
    }, 10);
}

function shrinkCircle(circle) {
    var radius = 30;
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

function Lerp(a, b, t) {
    return a * t + b * (1-t);
}

setBackground();
document.addEventListener("mousemove", function(event) {
    let detail = 10;
    let oldX = mouseX;
    let oldY = mouseY;
    let newX = event.clientX;
    let newY = event.clientY;
    for (let i = 0; i < detail; i++) {
        mouseX = Lerp(oldX, newX, (i + 1) / detail);
        mouseY = Lerp(oldY, newY, (i + 1) / detail);
        bamboozle();
    }
    mouseX = event.clientX;
    mouseY = event.clientY;
});
