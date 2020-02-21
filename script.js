var startTimer = document.querySelector("#startquiz");
var timer = document.querySelector("#timer");
var instructions = document.querySelector('.instructions')
var questionContainer = document.querySelector('#question-container')

var quizQuestion = document.querySelector('#firstQuestion')
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')

index = 0;

startTimer.addEventListener("click", function clock(){
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    var quizTimer = setInterval(myClock, 1000);
    var count = 75;
    function myClock(){
        timer.innerHTML = count--;
        if(count === 0){
            clearInterval(quizTimer);
        }
    }
})

var app = {
        questions:[
            {q1:'Arrays in Javascript can be used to store ________.', 
            options1:['Numbers and Strings', 'Other Arrays', 'Booleans', 
                'All of the above'],
            answer:1},

            {q2:'String values must be enclosed within ________ when being assigned to variables.', 
            options2:['Commas', 'Curly Brackets', 'Quotes', 
                'Parantheses'],
            answer:1},

            {q3:'Commonly used data types DO NOT include:', 
            options3:['Strings', 'Booleans', 'Alerts', 
                'Numbers'],
            answer:1},

            {q4:'The condition in an if / else statement is enclosed within ________.', 
            options4:['Quotes', 'Curly Brackets', 'Parantheses', 
                'Square Brackets'],
            answer:1},

            {q5:'A very useful tool used during development and debugging for printing content to the debugger is:', 
            options5:['Javascript', 'Terminal/Bash', 'For Loops', 
                'Console Log'],
            answer:1},
        ],
        
}

function test(){
    quizQuestion.innerHTML=app.questions[index].q1;
    option1.innerHTML=app.questions[index].options1[0]
    option2.innerHTML=app.questions[index].options1[1]
    option3.innerHTML=app.questions[index].options1[2]
    option4.innerHTML=app.questions[index].options1[3]
}

test()