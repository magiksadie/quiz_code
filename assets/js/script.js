// global variables
var questionEl = document.querySelector("#question");
var optionsEl = Array.from(document.querySelector("#answerBtn"));
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
        choice1:`for`,
        choice2:`for...in`,
        choice3:`while`,
        choice4:`on...while`,
        answer: 3,
    },
    { //question 3
        questionEl: 'How do you "jump out" a loop of code?',
        choice1:`break`,
        choice2:`stop`,
        choice3:`continue`,
        choice4:`fullstop`,
        answer: 1,
    },
    { //question 4
        questionEl: 'Which of the following comparisons operators mean equal of value and type?',
        choice1:`=`,
        choice2:`!==`,
        choice3:`&&`,
        choice4:`===`,
        answer: 4,
    },
    { //question 5
        questionEl: 'How do you contain an array?',
        choice1:`[]`,
        choice2:`""`,
        choice3:`{}`,
        choice4:`()`,
        answer: 1,
    },
    { //question 5
        questionEl: 'Which HTML element do we use to include external javaScript file?',
        choice1:`scripting`,
        choice2:`java`,
        choice3:`javascript`,
        choice4:`script`,
        answer: 4,
    },
    { //question 6
        questionEl: 'Which one of these is the proper way to create a function?',
        choice1:`function ="var"`,
        choice2:`function: myFunction()`,
        choice3:`function = myFunction()`,
        choice4:`function myFunction()`,
        answer: 4,
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
    
};