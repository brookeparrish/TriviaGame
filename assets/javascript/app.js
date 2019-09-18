$(document).ready(function () {
    
    function calculateScore () {
        let correctAnswer = 0;
        let allAnswer = [];
        let unanswered = 0;
        let incorrectAnswer = 0;

        let answer1 = $("input[name='question1']:checked").val();
        let answer2 = $("input[name='question2']:checked").val();
        let answer3 = $("input[name='question3']:checked").val();
        let answer4 = $("input[name='question4']:checked").val();
        let answer5 = $("input[name='question5']:checked").val();

        allAnswer.push(answer1, answer2, answer3, answer4, answer5);

        for (let i = 0; i < allAnswer.length; i++) {
            if (allAnswer[i] === undefined) {
                unanswered++;
            }
            else {
                correctAnswer += parseInt(allAnswer[i]);
            }
        }

        incorrectAnswer = 5 - correctAnswer;
    }

    var timeRemaining = 30;
    var timer = setInterval(myTimer, 1000);
    
    function myTimer() {
        $("#updatedTime").text(timeRemaining);

        if(timeRemaining === 0) {
            clearInterval(timer);
        }

        timeRemaining--;
    }

    //$("#startGame").hide();
});