// global variables
var questionEl = document.querySelector("#question");
var optionsEl = new Array(document.querySelector("#answerBtn"));
var timerEl = document.querySelector("#timer");

let currentQuestion = {};
let acceptingAnswer = true;
let timer = 0;
let questionCounter = 0;
let availableQuestions = [];

//question array
let questions = [
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
var questionAmount = 6;
//select questions
startGame = () => {
    questionCounter = 0;
    timer = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > questionAmount) {
        localStorage.setItem("recentScore", timer);
        return window.location.assign("/end.html");
    }
    questionCounter++;

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionEl.innerText = currentQuestion.questionEl;
    
    optionsEl.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
availableQuestions.splice(questionsIndex, 1);

acceptingAnswer = true;
};