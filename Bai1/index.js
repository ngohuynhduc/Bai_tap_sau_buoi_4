let [millisecs,secs,mins,hours] = [0,0,0,0];
let timer=document.querySelector('.timer-display');
let startRef=document.getElementById('startTimer');
let int = null;

document.getElementById('startTimer').addEventListener('click',startTime);
// document.getElementById('pauseTimer').addEventListener('click',pauseTime);
document.getElementById('resetTimer').addEventListener('click',resetTime);

function startTime(){
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    startRef.removeEventListener('click',startTime);
    startRef.addEventListener('click',pauseTime);
    startRef.innerHTML="Pause";
}
function pauseTime(){
    clearInterval(int);
    startRef.removeEventListener('click',pauseTime);
    startRef.addEventListener('click',startTime);
    startRef.innerHTML="Start";
}
function resetTime(){
    clearInterval(int);
    [millisecs,secs,mins,hours] = [0,0,0,0];
    timer.innerHTML='00 : 00 : 00 : 000';
    startRef.removeEventListener('click',pauseTime);
    startRef.addEventListener('click',startTime);
    startRef.innerHTML="Start";
}
function displayTimer(){
    millisecs+=10;
    if(millisecs == 1000){
        millisecs = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
            if(mins == 60){
                mins = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;
    let ms = millisecs < 10 ? "00" + millisecs : millisecs < 100 ? "0" + millisecs : millisecs;

    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
    }