var startTimer = document.querySelector("#startquiz");
var startQuiz = document.querySelector("#starquiz");
var timer = document.querySelector("#timer");
var instructions = document.querySelector('.instructions')
var questionContainer = document.querySelector('#question-container')
var nextButton = document.querySelector("#next-btn")
var finishButton = document.querySelector("#finish-btn")
let shuffledQuestions, currentQuestionsIndex

var questionElement = document.querySelector('#question')
var answerButtonsELement = document.querySelector('#answer-buttons')

var count = 75;

nextButton.addEventListener('click', () =>{
    currentQuestionsIndex ++
    setNextQuestion()
})

var quizTimer;
startTimer.addEventListener("click", function clock(){
    quizTimer = setInterval(myClock, 1000);
    function myClock(){
        timer.innerHTML = count--;
        if(count === 0){
            clearInterval(quizTimer);
        }
    }
})

startTimer.addEventListener("click", function startQuiz(){
    instructions.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
})

function setNextQuestion(){
    resetState()
    showQuestion (shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsELement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsELement.firstChild){
        answerButtonsELement.removeChild
        (answerButtonsELement.firstChild)
    }
}

function selectAnswer (e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsELement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1){
        nextButton.classList.remove('hide')
    }else {
        finishButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    if (correct){
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

var questions = [
    {
        question: 'Arrays in Javascript can be used to store ________.',
        answer: [
            {text: 'Numbers and Strings', correct: true},
            {text: 'Other Arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'All of the Above', correct: false}
        ]
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables. ',
        answer: [
            {text: 'Commas', correct: true},
            {text: 'Curly Brackets', correct: false},
            {text: 'Quotes', correct: false},
            {text: 'Parentheses', correct: false}
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answer: [
            {text: 'Strings', correct: true},
            {text: 'Booleans', correct: false},
            {text: 'Alerts', correct: false},
            {text: 'Numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within ________.',
        answer: [
            {text: 'Quotes', correct: true},
            {text: 'Curly Brackets', correct: false},
            {text: 'Parantheses', correct: false},
            {text: 'Square Brackets', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            {text: 'Javascript', correct: true},
            {text: 'Terminal/Bash', correct: false},
            {text: 'For Loops', correct: false},
            {text: 'Console Log', correct: false}
        ]
    },
]