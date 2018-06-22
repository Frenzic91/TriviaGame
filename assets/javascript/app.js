let timeLeft = 30; // seconds
let numQuestions = 8;
let answered = 0;
let unanswered = 0;
let correct = 0;
let incorrect = 0;

let correctAnswers = ["peru", "n", "moth", "isaac-newton", "william", "lesotho", "baghdad", "richard-nixon"];
let playerAnswers = ["", "", "", "", "", "", "", ""];

$("#start-button").click(function() {

    let intervalId = setInterval(function() {
        timeLeft -= 1;
        $("#time-left").text(timeLeft);

        if (timeLeft < 0) {
            for (let i = 0; i < playerAnswers.length; i++) {
                if (playerAnswers[i] != "") {
                    answered += 1;
                } else {
                    unanswered += 1;
                }

                if (playerAnswers[i] == correctAnswers[i]) {
                    correct += 1;
                } else {
                    if (playerAnswers[i] != "")
                        incorrect += 1;
                }
            }

            $("#correct-answers").text(correct);
            $("#incorrect-answers").text(incorrect);
            $("#unanswered").text(unanswered);

            $("#container").empty();
            $("#container").append($("#end"));
            $("#end").css("display", "block");

            clearInterval(intervalId);
        }
    }, 1000);

    $("#container").empty();
    $("#container").append($("#quiz"));
    $("#quiz").css("display", "block");
});

$("input").click(function() {
    let answer = $(this).attr("value");
    let num = parseInt($(this).attr("name"));

    playerAnswers[num] = answer;

    console.log("Answer: ", answer);
    console.log("Answer: ", num);
});