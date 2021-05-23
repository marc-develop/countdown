const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
// const milsecondsEL = document.getElementById("milseconds")

const countdownEnd = "31 Dec 2021";

function countdown() {
    const countdownEndDate = new Date(countdownEnd);
    const currentDate = new Date();

    const totalmilSeconds = countdownEndDate - currentDate;

    const days = Math.floor(totalmilSeconds/1000 / 3600 / 24);
    const hours = Math.floor(totalmilSeconds/1000 / 3600) % 24;
    const mins = Math.floor(totalmilSeconds/1000 / 60) % 60;
    const seconds = Math.floor(totalmilSeconds/1000) % 60;
    // const milseconds = totalmilSeconds - days*24*60*60*1000 - hours*60*60*1000-mins*60*1000-seconds*1000;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    // milsecondsEL.innerHTML = formatmilSeconds(milseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// function formatmilSeconds(time) {
//     if (time<10){
//     return `00${time}`;}
//     else if (time<100){
//     return `0${time}`;}
//      else{
//      return time;
//     }
// }



// initial call
countdown();

setInterval(countdown, 100);