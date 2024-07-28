let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

function startTimer() {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
    startStopBtn.innerHTML = "Stop";
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerHTML = "Start";
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    running = false;
    startStopBtn.innerHTML = "Start";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds;
}

startStopBtn.addEventListener('click', function() {
    if (!running) {
        startTimer();
    } else {
        stopTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);
