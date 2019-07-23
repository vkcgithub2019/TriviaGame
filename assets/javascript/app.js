//creating variables and initializing
//time given to play the game
var timer = 40;
//time interval
var intervalId;
//tracking correct answers
var correctAnswers = 0;
//tracking wrong answers
var incorrectAnswers = 0;
//tracking unanswered questions
var unanswered = 0;

// Questions array
var questions = [{
    question: "what is the name of the panda who practiced Kung Fu?",
    answerList: ["Po","Master Shifu","Tai Lung","Jackie Chan"],
    answer: 0
},{
    question: "Who is Po's Kung Fu master?",
    answerList: ["Mr. Shifu"," Bruce Lee","Donnie Chen","No one"],
    answer: 0
},{
    question: "What was written on the Dragon Scroll?",
    answerList: ["You are the Dragon Master", "Nothing", "Breathe", "Relax"],
    answer: 1
},{
    question: "What is Po's favorite food?",
    answerList: ["Noodle", "Dumpling", "Hamburger", "Donuts"],
    answer: 0
},{
    question: "Who is Po's adopted dad?",
    answerList: ["Zeng", "Zhang", "Mr. Chen", "Mr. Ping"],
    answer:3
},{
    question: "Who is the evil snow leopard that wants to be the Dragon Warrior?",
    answerList: ["Tai Lung", "Tai Wan", "Tai Chen", "Rocky Liu"],
    answer: 0
},{
    question: "What does Po's father sell?",
    answerList: ["Tangerine", "Noodles", "Dumplings", "Tofu"],
    answer: 1
},{

    question: "What famous martial artist voiced Master Monkey?",
    answerList: ["Lucy Liu", "Jet Li", "Jackie Chan", "Zhang ZiYi"],
    answer: 2
},{

    question: "What animal is Master Shifu?",
    answerList: ["Monkey", "Red Panda", "Raccoon", "Pig"],
    answer: 1
},{

    question: "Who had inner peace in the end?",
    answerList: ["Mr. Shifu", "Po", "Ooogway", "Tai Lung"],
    answer: 1

}];

//game start when clicked, start button disappear, timer starts
$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 40 Seconds</h2>" + "<br>");

    // Start timer countdown, timer is set to run
    run();
   
    // Displaying the questions and answers with given id's on html page
    // Question 1 with answer choices from their respective arrays
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2 with answer choices from their respective arrays
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3 with answer choices from their respective arrays
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4 with answer choices from their respective arrays
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5 with answer choices from their respective arrays
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6 with answer choices from their respective arrays
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7 with answer choices from their respective arrays
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    // Question 8 with answer choices from their respective arrays
    $("#question8").html("<h3>" + questions[7].question + "</h3>");
    $("#answer8").html("<input type='radio' name='answer8' value='0'>" + "<label>" + questions[7].answerList[0] + "</label>"
    + "<input type='radio' name='answer8' value='1'>" + "<label>" + questions[7].answerList[1] + "</label>"
    + "<input type='radio' name='answer8' value='2'>" + "<label>" + questions[7].answerList[2] + "</label>"
    + "<input type='radio' name='answer8' value='3'>" + "<label>" + questions[7].answerList[3] + "</label><br><br>"
    );


    // Question 9 with answer choices from their respective arrays
    $("#question9").html("<h3>" + questions[8].question + "</h3>");
    $("#answer9").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[8].answerList[0] + "</label>"
    + "<input type='radio' name='answer9' value='1'>" + "<label>" + questions[8].answerList[1] + "</label>"
    + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answerList[2] + "</label>"
    + "<input type='radio' name='answer9' value='3'>" + "<label>" + questions[8].answerList[3] + "</label><br><br>"
    );


// Question 10 with answer choices from their respective arrays
    $("#question10").html("<h3>" + questions[9].question + "</h3>");
    $("#answer10").html("<input type='radio' name='answer10' value='0'>" + "<label>" + questions[9].answerList[0] + "</label>"
    + "<input type='radio' name='answer10' value='1'>" + "<label>" + questions[9].answerList[1] + "</label>"
    + "<input type='radio' name='answer10' value='2'>" + "<label>" + questions[9].answerList[2] + "</label>"
    + "<input type='radio' name='answer10' value='3'>" + "<label>" + questions[9].answerList[3] + "</label><br><br>"
    );


    // Submit button when player is done with the quiz,Done button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button, stop timer and game
    $("#done").on("click", function() {
        stop();
        // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();
        
    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the time remaining with id = time from html page
    $("#time").html("<h2>Time Remaining: " + timer + " Seconds</h2>" + "<br>");

    if (timer === 0) {

        // Run stop function to stop timer countdown
        stop();
        
       keepingScore();
       displayResults();
        
    }
}

function stop() {
    //time interval stops
    clearInterval(intervalId);
     
 }

// Function used for displaying results in terms of correct, incorrect, and unanswered 
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#question8").hide();
    $("#answer8").hide();
    $("#question9").hide();
    $("#answer9").hide();
    $("#question10").hide();
    $("#answer10").hide();

    $("#submit").hide();

    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, incorrect, and unanswered 
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();
    var userAnswer8 = $("input[name='answer8']:checked").val();
    var userAnswer9 = $("input[name='answer9']:checked").val();
    var userAnswer10 = $("input[name='answer10']:checked").val();





    // Question 1
    //if no answer is selected
    if (userAnswer1 === undefined) {
//increase unanswered tally by one
        unanswered++;
    }
    //if user''s selected answer matches the correct answers in the answer array
    else if (userAnswer1 == questions[0].answer) {
//increase the correct answer tally by one
        correctAnswers++;
    }
    else {
//otherwise increase incorrect answer tally by one
        incorrectAnswers++;
    }

    // Question 2 
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  


// Question 8
if (userAnswer8 === undefined) {

    unanswered++;
}
else if (userAnswer8 == questions[7].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}  

// Question 9
if (userAnswer9 === undefined) {

    unanswered++;
}
else if (userAnswer9 == questions[8].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}  

    // Question 10
    if (userAnswer10 === undefined) {

        unanswered++;
    }
    else if (userAnswer10 == questions[9].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}