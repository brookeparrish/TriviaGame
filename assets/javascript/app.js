$(document).ready(function () {
    
    $("#startGame").click(function (){
        $("#startGame").hide();
        $("#updatedTime").text(timeRemaining);
        startTimer();
        $("#gameStarted").show();
    });

    $("#gameStarted").hide();

    $("#allDone").hide();
      
    var correctAnswer = 0;
    var allAnswer = [];
    var unanswered = 0;
    var incorrectAnswer = 0;

    function calculateScore () {

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

    var timeRemaining = 20;
    var timer= null;

    function startTimer () {
        timer = setInterval(myTimer, 1000);
    }
        
    function myTimer() {
        $("#updatedTime").text(timeRemaining);

        if(timeRemaining === 0) {
            clearInterval(timer);
            $("#gameStarted").hide();
            calculateScore();
            $("#correctAnswers").text(correctAnswer);
            $("#incorrectAnswers").text(incorrectAnswer);
            $("#unanswered").text(unanswered);
            $("#allDone").show();
        }

        timeRemaining--;
    }

    
});