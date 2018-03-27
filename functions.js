var temple = document.getElementById("temple"),
    mousecoords = document.getElementById("mousecoords"),
    animation = setInterval(spintemple, 5),
    degangle = 0,
    xpos = 0,
    ypos = 0;

function spintemple() {
    degangle++;
    temple.style.transform = "rotatez(" + degangle + "deg) rotatex(" + degangle + "deg) rotatey(" + degangle + "deg)"
}

document.addEventListener("mousemove", templefollow)
function templefollow() {
    var mouseX = event.clientX,
        mouseY = event.clientY;

    temple.style.left = mouseX + "px";
    temple.style.top = mouseY + "px";
}

window.addEventListener("keypress", frequency);
function frequency() {

    document.getElementById("rainbow").style.animationDuation = "5s"

}
