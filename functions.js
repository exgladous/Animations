var moveButton = document.getElementById("go");
moveButton.addEventListener("click", moveTemple);

var xpos = 0,
    ypos = 0;

function moveTemple() {
    var direction = document.getElementById("direction").value;

    if (direction == "right") {
        document.getElementById("temple").className = "moveright"

    }

}
