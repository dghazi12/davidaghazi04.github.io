var startQuiz = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var instructions = document.querySelector('.instructions')
var questionContainer = document.querySelector('#question-container')
let shuffledQuestions, currentQuestionsIndex

var questionElement = document.querySelector('#question')
var answerButtonsElement = document.querySelector('#answer-buttons')
var nextButton = document.querySelector('#next-btn')
var finishButton = document.querySelector('#finish-btn')

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})
startQuiz.addEventListener("click", function clock() {
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    var quizTimer = setInterval(myClock, 1000);
    var count = 75;
    function myClock() {
        timer.innerHTML = count--;
        if (count === 0) {
            clearInterval(quizTimer);
        }
    }
    startGame()
})

function startGame(){
    questionContainer.classList.remove('hide')
    startQuiz.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionsIndex +1){
        nextButton.classList.remove('hide')
    }else{
        finishButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        console.log('correct')
    }else {
        element.classList.add('wrong')
        console.log('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// finishButton.addEventListener

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

// var questions = [
//     {
//         q1: 'Arrays in Javascript can be used to store ________.',
//         options1: ['Numbers and Strings', 'Other Arrays', 'Booleans',
//             'All of the above'],
//         answer: 3
//     },

//     {
//         q2: 'String values must be enclosed within ________ when being assigned to variables.',
//         options2: ['Commas', 'Curly Brackets', 'Quotes',
//             'Parantheses'],
//         answer: 1
//     },

//     {
//         q3: 'Commonly used data types DO NOT include:',
//         options3: ['Strings', 'Booleans', 'Alerts',
//             'Numbers'],
//         answer: 1
//     },

//     {
//         q4: 'The condition in an if / else statement is enclosed within ________.',
//         options4: ['Quotes', 'Curly Brackets', 'Parantheses',
//             'Square Brackets'],
//         answer: 1
//     },

//     {
//         q5: 'A very useful tool used during development and debugging for printing content to the debugger is:',
//         options5: ['Javascript', 'Terminal/Bash', 'For Loops',
//             'Console Log'],
//         answer: 1
//     },
// ]


// totalQuestion.innerHTML=questions.length
// function test() {
//     questionNumber.innerHTML=index+1;
//     quizQuestion.innerHTML = questions[questionIndex].q1;
//     option1.innerHTML = questions[questionIndex].options1[0]
//     option2.innerHTML = questions[questionIndex].options1[1]
//     option3.innerHTML = questions[questionIndex].options1[2]
//     option4.innerHTML = questions[questionIndex].options1[3]
//     nextButton.addEventListener('click', function(){
//         questionNumber.innerHTML=index+2;
//         quizQuestion.innerHTML=questions[questionIndex+1].q2
//         option1.innerHTML = questions[questionIndex+1].options2[0]
//         option2.innerHTML = questions[questionIndex+1].options2[1]
//         option3.innerHTML = questions[questionIndex+1].options2[2]
//         option4.innerHTML = questions[questionIndex+1].options2[3]
//     }
// )}

// function check(element){
//     if(element.id==questions[questionIndex].answer){
//         console.log("correct")
//     }else {
//         console.log("wrong")
//     }
//     nextButton.classList.remove('hide')
// }

// test()

// function setNextQuestion(){
   
// }

// function resetState(){
//     nextButton.classList.add('hide')
// }

// nextButton.addEventListener('click', function (){
//     resetState()
//     setNextQuestion()
// })

// nextButton.addEventListener('click', () =>{
//     currentQuestionsIndex ++
//     setNextQuestion()
// })


// if (shuffledQuestions.length > currentQuestionsIndex + 1){
//     nextButton.classList.remove('hide')
// }else {
//     finishButton.classList.remove('hide')
// }
  

// bracketpaircolorizer

// if question is wrong, substract 10 seconds in if statement









// function makeHandler(i)
//   {
//     return function() {
//         t.progressBars[t.current].update(buttons[i].getAttribute("data-value"));
//       }
//   }

//   for (var i = 0; i < buttons.length; i++) {

//       buttons[i].onclick = makeHandler(i);

//   }
