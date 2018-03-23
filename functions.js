var moveButton = document.getElementById("go");
moveButton.addEventListener("click", enlargeTemple);

function moveTemple() {
    var direction = document.getElementById("direction").value;
    if (direction == "up") {
        var destinationx = xpos + 100;
        console.log(destinationx);
        temple.style.left = xpos + "px";
    }
}
