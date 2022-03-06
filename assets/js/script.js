// global variables
var savedScores = [];
var timerVal = 0;
var timeStampEl = document.querySelector("#timer");
var timerEl = document.querySelector("#startBtn");
var questionEl = document.querySelector("#question");
// hides sections
// save scores
var setSavedScores = function() {
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}
// timer function
timerEl.addEventListener("click", function() {
    if (timerVal === 0) {
       timerVal = setInterval(function () {
           timeLeft--;
           timeStampEl.textContent = "Time left: " + timeLeft;

           if (timeLeft <= 0) {
               clearInterval(timerVal);
                finishedQuiz();
                timeStampEl.textContent = "Time's up!";
           }
       }, 1000); 
    }
})
// finished the quiz