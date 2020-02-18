var startquiz = document.querySelector("#startquiz");
var timer = document.querySelector("#timer");
var seconds = 0;
var minutes = 0;
var hours = 0;
var count = 10;

var quizTimer;
startquiz.addEventListener("click", function clock(){
    quizTimer = setInterval(myClock, 1000);
    function myClock(){
        timer.innerHTML = count--;
        if(count === 0){
            clearInterval(quizTimer);
        }
    }
})