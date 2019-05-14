var unanswered = 0;
var correct = 0;
var incorrect = 0;
var intervalId; 
var timer = 5; 

$("#questions").hide ()

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function stop() {
    clearInterval(intervalId);
    $("#questions").html("<h1>Game Over</h1> <p>Unanswered: "+ unanswered + "</p><p>Correct: " + correct + "</p><p>Incorrect:" + incorrect + "</p>");
}

function decrement() {

    timer--;

    $("#timer").html("<h2>" + timer + "</h2>");

    if (timer === 0) {

      stop();

    }
  }


$("#start").on("click", function () {
    console.log("start button clicked")

    $("#questions").show ();
    run ();

})



//on.click on start button begins the game CHECK 


//initiatilize timer count down CHECK 

//MC questions reveal on page; make a class for all questions (CHECK) and then link a click event
    //evaluate for each question whether the answer is correct or not
    //If Else Statement
        //if correct add to the correct score
        //if incorrect add to incorrect score 

    //if else timer runs out
        //if timer runs out, goes to end page (CHECK) : if timer > 0; if submit clicked; else timer = 0
        //tallies unaswered questions

    // create a function for tallying
    // create a function for endpage

//end page to show stats 


// 1. create q & a's ; hide in the questions <button data-value="true">SPICE</button>
// console.log this to evaluate if it works