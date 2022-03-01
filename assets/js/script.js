// global variables
var savedScores = [];
var timerVal = 0;

var question = document.querySelector("#question");
// hides sections

// save scores
var setSavedScores = function() {
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}

