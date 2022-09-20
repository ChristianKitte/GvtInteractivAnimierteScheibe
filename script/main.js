const sprites = ["bg-sprite00", "bg-sprite45", "bg-sprite90", "bg-sprite135", "bg-sprite180", "bg-sprite225", "bg-sprite270", "bg-sprite315"];
const percents = ["0°", "45°", "90°", "135°", "180°", "225°", "270°", "315°"];

const startIndex = 0;
var currentIndex = startIndex;

const endIndex = 7

var autoRun = false;
var intervallID = 0;

// clockwise
var moveForward = true;

const spriteDiv = document.getElementById("spriteImage");
const spritePercent = document.getElementById("percentTag")

window.onload = () => {
    spriteDiv.classList.add(sprites[currentIndex]);
    spritePercent.innerText = percents[currentIndex];
}

document.getElementById("step_right").onclick = () => {
    showNext(true);
}

document.getElementById("step_left").onclick = () => {
    showNext(false);
}

const check_rechts_drehen = document.getElementById("rechts_drehen");
check_rechts_drehen.onchange = (x) => {
    moveForward = document.getElementById("rechts_drehen").checked;
}

const check_fortlaufen_drehen = document.getElementById("fortlaufen_drehen");
check_fortlaufen_drehen.onchange = (x) => {
    autoRun = document.getElementById("fortlaufen_drehen").checked;

    if (autoRun) {
        intervallID = setInterval("showNext(moveForward)", 125);
        document.getElementById("step_right").disabled = true;
        document.getElementById("step_left").disabled = true;
        document.getElementById("rechts_drehen").disabled = false;
    } else {
        clearInterval(intervallID);
        document.getElementById("step_right").disabled = false;
        document.getElementById("step_left").disabled = false;
        document.getElementById("rechts_drehen").disabled = true;
    }
}

function turnStepRight() {
    showNext(true);
}

function turnStepLeft() {
    showNext(false);
}

function setStyle() {

}

function showNext(moveForward) {
    spriteDiv.classList.remove(sprites[currentIndex]);

    if (moveForward) {
        currentIndex++;
        if (currentIndex > endIndex) {
            currentIndex = startIndex;
        }
    } else {
        currentIndex--;
        if (currentIndex < startIndex) {
            currentIndex = endIndex;
        }
    }


    spriteDiv.classList.add(sprites[currentIndex]);
    spritePercent.innerText = percents[currentIndex];
}

intervallID = setInterval("showNext(moveForward)", 125);