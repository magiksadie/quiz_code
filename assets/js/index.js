//global variables
var startBtnEl = document.querySelector("#startBtn");
var nextBtnEl = document.getElementById('nextBtn');
var questionEl = document.getElementById('question');
var optionsEl = document.getElementById("options");
var timerEl = document.querySelector("#timer");
var questionSectionEl = document.getElementById('questionSection');
var instructionPEl = document.getElementById('instructions');

let shuffledQuestions, currentQuestionIx;
//start quiz
startBtnEl.addEventListener('click', function() {
    startBtnEl.classList.add('hide');
    instructionPEl.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5); //randomly sort questions
    currentQuestionIx  = 0; //set first question
    questionSectionEl.classList.remove('hide');
    getNewQuestion();
});
nextBtnEl.addEventListener('click', () => {
    currentQuestionIx++;
    getNewQuestion();
})
//select questions
function getNewQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIx]);
};

function showQuestion(questions) {
    document.body.classList.remove('correct');
    document.body.classList.remove('incorrect');
    questionEl.innerText= questions.questionEl;
    questions.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'optionsColor');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectOption);
        optionsEl.appendChild(button);
    })
};

function resetState() {
    nextBtnEl.classList.add('hide');
    while (optionsEl.firstChild) {
        optionsEl.removeChild(optionsEl.firstChild)
    }
};

function selectOption(event) {
    var selectOption = event.target;
    var correct = selectOption.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(optionsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextBtnEl.classList.remove('hide');
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}
//question and answers array
const questions = [
    { //question 1
        questionEl: 'What is the correct way to add comments in javaScript?',
        answers: [
            {text:`// or */`, correct: true},
            {text:`| or ||`, correct: false},
            {text:`<!-->`, correct: false},
            {text:`*...*`, correct: false}
        ]
    },
    { //question 2
        questionEl: 'Which loop allows you to loop through a block of code while a specified condition is true?',
        answers: [
            {text:`for`, correct: false},
            {text:`for...in`, correct: false},
            {text:`while`, correct: true},
            {text:`on...while`, correct: false}
        ]
    },
    { //question 3
        questionEl: 'How do you "jump out" a loop of code?',
        answers: [
            {text:`break`, correct: true}, 
            {text:`stop`, correct: false},
            {text:`continue`, correct: false},
            {text:`fullstop`, correct: false}
        ]
    },
    { //question 4
        questionEl: 'Which of the following comparisons operators mean equal of value and type?',
        answers: [
            {text:`=`, correct: false},
            {text:`!==`, correct: false},
            {text:`&&`, correct: false},
            {text:`===`, correct: true}
        ]
    },
    { //question 5
        questionEl: 'How do you contain an array?',
        answers: [
            {text:`[]`, correct: true},
            {text:`""`, correct: false},
            {text:`{}`, correct: false},
            {text:`()`, correct: false}
        ]
    },
    { //question 5
        questionEl: 'Which HTML element do we use to include external javaScript file?',
        answers: [
            {text:`scripting`, correct: false},
            {text:`java`, correct: false},
            {text:`javascript`, correct: false},
            {text:`script`, correct: true}
        ]
    },
    { //question 6
        questionEl: 'Which one of these is the proper way to create a function?',
        answers: [
            {text:`function ="var"`, correct: false},
            {text:`function myFunction()`, correct: true},
            {text:`function: myFunction()`, correct: false},
            {text:`function = myFunction()`, correct: false}
        ]
    },
]
