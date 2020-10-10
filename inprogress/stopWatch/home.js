const startButton = document.querySelector('[data-action="start"]');
const stopButton  = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes     = document.querySelector('.minutes');
const seconds     = document.querySelector('.seconds');
let timerTime     = 00;
let interval;    
let isrunning =false;

function startTimer() {
    if(isrunning) return;
    isrunning=true;
    interval=setInterval(incrementTimer,1000);

}

function stopTimer() {
    if(!isrunning) return;
    isrunning=false;
    clearInterval(interval);

}

function resetTimer() {
    timerTime=0;
    minutes.innerText='00';
    seconds.innerText='00';

}

function incrementTimer() {
    timerTime++;
    const numofMinutes=Math.floor(timerTime/60);
    const numofsecound=timerTime%60;

    minutes.innerText=pad(numofMinutes);
    seconds.innerText=pad(numofsecound);

}

function pad(number) {
  return (number < 10) ? '0' + number : number;

}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);