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
            clearInterval(grow);
            shrinkCircle(circle);
        } // works on my computer :)
    }, 10); // try to run it again
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

setBackground();
document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    bamboozle();
});
