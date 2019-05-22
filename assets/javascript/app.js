var unanswered = 0;
var correct = 0;
var incorrect = 0;
var intervalId; 
var timer = 10; 
var answer = 0;
var questions = 0;
var numOfQuestions = [];

$("#questions").hide ()

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function stop() {
    clearInterval(intervalId);
    $("#questions").html("<h1>Game Over</h1> <p>Unanswered: " + unanswered + "</p><p>Correct: " + correct + "</p><p>Incorrect:" + incorrect + "</p>");
}


function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
      stop();
    }
  }

function tally(answer) {
    // $("questions").each(function(){
      if (answer.val()==="right") {
        correct++;
      } else if (answer.val()==="wrong") {
        incorrect++;
      } else {
        unanswered++;
      }
    // });
  }

$("#start").on("click", function () {
    console.log("start button clicked")
    $("#questions").show ();
    run ();
    $("input").on("click", function (event){tally ($(this))})
})

//on click event for submit to run stop function

$("#submit").on("click", function(){stop()});
