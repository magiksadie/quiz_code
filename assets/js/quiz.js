//select questions
function getNewQuestion() {

};

console.log('Youve gotten this far!')
//question and answers array
let questions = [
    { //question 3
        questionEl: 'What is the correct way to add comments in javaScript?',
        answers: [
            {text:`// or */`, correct: true},
            {text:`| or ||`, correct: false},
            {text:`!--`, correct: false},
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
