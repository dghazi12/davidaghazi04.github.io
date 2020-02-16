var startquiz = document.querySelector("#startquiz")
var timer = document.querySelector("#timer")


function startTimer() {
    // setTime();
    /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
        secondsElapsed++;
        //So renderTime() is called here once every second.
        renderTime();
    }, 1000);
}

// function setTime() {
//     var minutes;

//     if (status === "Working") {
//         minutes = workMinutesInput.value.trim();
//     } else {
//         minutes = restMinutesInput.value.trim();
//     }

//     clearInterval(interval);
//     totalSeconds = minutes * 60;
// }

startquiz.addEventListener("click", startTimer)

var counter;

function countClicks(){

    if( !counter ){//counter is not set

        counter = setInterval(timer, 1000);

    } else {

        document.getElementById('click').value = ++clicks;
        document.getElementById('result').innerHTML = clicks;
    }
}