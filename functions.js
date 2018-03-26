
var temple = document.getElementById("temple"),
    animation = setInterval(spintemple, 5),
    degangle = 0,
    xpos = 0,
    ypos = 0;

function spintemple() {
    degangle++;
    temple.style.transform = "rotatez(" + degangle + "deg) rotatex(" + degangle + "deg) rotatey(" + degangle + "deg)"
}
