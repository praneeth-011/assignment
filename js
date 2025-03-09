let timerappele = document.getElementbyId("timerappelement");
let timerEle = document.getElementbyId("timerElement");
let startEle = document.getElementbyId("timerElement");
let stopEle = document.getElementbyId("stopElement");
let resetEle = document.getElementbyId("resetElement");
let shortbreakEle = document.getElementbyId("shortbreakElement");
let longbreakEle = document.getElementbyId("longbreakElement");

let timer;
let minutes = 15;
let seconds = 0;
let isPaused = false;
let enteredTime = null;

function startTimer() {
    timerEle = setInterval(resetTimer, 1000);
}
