"use strict"

var deadline = new Date("Oct 15, 2020").getTime();
var x = setInterval("countdown()", 1000);

function countdown() {
    var now = new Date().getTime();
    var timeLeft = deadline - now;
    var days = Math.floor(timeLeft / (1000*60*60*24));
    var hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((timeLeft % (1000*60)) / 1000);
    
    document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("coundownTimer").innerHTML = "Sorry! Event is over."
    } 
}