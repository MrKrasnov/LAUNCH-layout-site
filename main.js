"use strict"
timer();
setInterval(timer, 1000);

function timer() {
    const sale = new Date(2026, 1, 15, 12, 30, 30);
    const now = new Date();
    const rest = sale - now;

    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(rest / 1000 / 60) % 60;
    const second = Math.floor(rest / 1000) % 60;

    document.getElementById("d").innerText = days;
    document.getElementById("h").innerText = hours;
    document.getElementById("m").innerText = minutes;
    document.getElementById("s").innerText = second;
}