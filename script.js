// script.js
let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        displayTime();
    }, 10);
    document.getElementById('startBtn').setAttribute('disabled', 'true');
    document.getElementById('pauseBtn').removeAttribute('disabled');
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('pauseBtn').setAttribute('disabled', 'true');
    document.getElementById('startBtn').removeAttribute('disabled');
}

function stopStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime();
    document.getElementById('pauseBtn').setAttribute('disabled', 'true');
    document.getElementById('startBtn').removeAttribute('disabled');
}

function displayTime() {
    let centiseconds = Math.floor(elapsedTime / 10) % 100;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    let displayString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
    document.getElementById('display').textContent = displayString;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}
