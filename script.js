var startQuiz = document.querySelector("#start-btn");
var timerNumber = document.querySelector("#timer-number")
var instructions = document.querySelector('.instructions')
var questionContainer = document.querySelector('#question-container')
let currentQuestionsIndex

var questionElement = document.querySelector('#question')
var answerButtonsElement = document.querySelector('#answer-buttons')
var nextButton = document.querySelector('#next-btn')
var finishButton = document.querySelector('#finish-btn')

var count = 75;
var myTimer;

var myClock = function () {
    count--
    timerNumber.innerHTML = count;
    if (count === 0) {
        clearInterval(myTimer);
    }
}

function clock() {
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    myTimer = setInterval(myClock, 1000);
}

startQuiz.addEventListener("click", () => {
    startGame()
    clock()
})

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    questionContainer.classList.remove('hide')
    startQuiz.classList.add('hide')
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        finishButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        element.addEventListener('click', () => {
            count = count - 10
        })
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

finishButton.addEventListener('click', function(){
    clearInterval(myTimer)
})

var questions = [
    {
        question: 'Arrays in Javascript can be used to store ________.',
        answer: [   
            { text: 'Numbers and Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'Booleans', correct: false, },
            { text: 'All of the Above', correct: true }
            
        ]
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables. ',
        answer: [
            { text: 'Commas', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Quotes', correct: true },
            { text: 'Parentheses', correct: false}
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answer: [
            { text: 'Strings', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'Alerts', correct: true },
            { text: 'Numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within ________.',
        answer: [
            { text: 'Quotes', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Parantheses', correct: true },
            { text: 'Square Brackets', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            { text: 'Javascript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'Console Log', correct: true }
        ]
    },
]