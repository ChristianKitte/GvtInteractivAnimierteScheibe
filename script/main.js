/**
 * Array, dass die einzelnen Namen der Spriteklassen enthält.
 * @type {string[]}
 */
const sprites = ["bg-sprite00", "bg-sprite45", "bg-sprite90", "bg-sprite135", "bg-sprite180", "bg-sprite225", "bg-sprite270", "bg-sprite315"];
/**
 * Array, dass die einzelnen Angaben zum Drehwinkel der Spriteklasse enthält.
 * @type {string[]}
 */
const percents = ["0°", "45°", "90°", "135°", "180°", "225°", "270°", "315°"];

/**
 * Legt das erste anzuzeigende Sprite fest (Index aus dem array sprites).
 * @type {number} Der 0 basierte Index
 */
const startIndex = 0;
/**
 * Legt das letzte anzuzeigende Sprite fest (Index aus dem array sprites).
 * @type {number} Der 0 basierte Index
 */
const endIndex = 7
/**
 * Hält das aktuell angezeigte Sprite (Index aus dem array sprites).
 * @type {number} Der 0 basierte Index
 */
var currentIndex = startIndex;

/**
 * Hält, ob das Sprite kontinuierlich gedreht werden soll
 * @type {boolean} True für Autorun
 */
var autoRun = false;
/**
 * Die IntervallID des aktuell gestarteten Intervalls
 * @type {number} Die ID des Intervalls
 */
var intervallID = 0;

/**
 * Hält, ob das Sprite rechts (True) im Uhrzeigersinn gedreht werden soll oder nicht.
 * @type {boolean} True für vorwärts (rechts im Uhrzeigersinn)
 */
var moveForward = true;

/**
 * Hält den Anzeigebereich (DIV) für das Image (Hintergrundbild)
 * @type {HTMLElement} Der DIV Container
 */
const spriteDiv = document.getElementById("spriteImage");
/**
 * Hält den Prozentschriftzug
 * @type {HTMLElement} Der Paragraph
 */
const spritePercent = document.getElementById("percentTag")
/**
 * Hält die Checkbox zur Angabe der Drehrichtung
 * @type {HTMLElement} Die Checkbox
 */
const check_rechts_drehen = document.getElementById("rechts_drehen");
/**
 * Hält die Checkbox zur Angabe, ob eine fortlaufende Drehung erfolgen soll
 * @type {HTMLElement} Die Checkbox
 */
const check_fortlaufen_drehen = document.getElementById("fortlaufen_drehen");

/**
 * Initialisierung des Anfangszustandes
 */
window.onload = () => {
    spriteDiv.classList.add(sprites[currentIndex]);
    spritePercent.innerText = percents[currentIndex];
}

/**
 * Händelt die Eingabe der Tasten "r" (rechts) und "l" (links) und startet die
 * zugehörige Aktion zur Drehung, sofern keine forlaufende Drehung gewählt wurde.
 * @param event Das zugehörige Event
 */
document.querySelector('body').onkeydown = (event) => {
    autoRun = document.getElementById("fortlaufen_drehen").checked;

    if (!autoRun) {
        //console.log(event.key);

        switch (event.key) {
            case "l":
                showNext(false);
                break;
            case "r":
                showNext(true);
                break;
        }
    }
}

/**
 * Händelt den Button Click für eine Drehung nach rechts.
 */
document.getElementById("step_right").onclick = () => {
    showNext(true);
}

/**
 * Händelt den Button Click für eine Drehung nach links.
 */
document.getElementById("step_left").onclick = () => {
    showNext(false);
}

/**
 * Händelt die Checkbox für die Drehrichtung
 */
check_rechts_drehen.onchange = () => {
    moveForward = document.getElementById("rechts_drehen").checked;
}

/**
 * Händelt die Checkbox für die kontinuierliche Drehung
 */
check_fortlaufen_drehen.onchange = () => {
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

/**
 * Zeigt das nächste Bild an, indem die Klasse des entsrechenden DIV Container
 * ausgetauscht wird und passt die Beschriftung an.
 * @param moveForward True, gleich vorwärts (rechts im Uhrzeigersinn)
 */
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
    spritePercent.innerText = "Drehwinkel: " + percents[currentIndex];
}

/**
 * Startet den anfänglichen Intervall in Vorwärtsrichtung
 * @type {number} Die aktuelle IntervallID
 */
intervallID = setInterval("showNext(moveForward)", 125);