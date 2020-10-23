// functions of Question
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

function isCorrect(question, choice) {
    return question.answer === choice;
}

// function of Quiz
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// functions of Game
function generate(quiz) {
    if(isEnded(quiz)) {
        showScores(quiz);
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = getCurrentQuestion(quiz).text;

        // show options
        var choices = getCurrentQuestion(quiz).choices;
        for(var i = 0; i < choices.length; i++) {
            element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, quiz, choices[i]);
        }

        showProgress(quiz);
    }
}

function isEnded(quiz) {
    return quiz.questionIndex === quiz.questions.length;
}

function getCurrentQuestion(quiz) {
    return quiz.questions[quiz.questionIndex];
}

function guess(btnid, quiz, choice) {
    var button = document.getElementById(btnid);
    button.onclick = () => {
        if (isCorrect(getCurrentQuestion(quiz), choice)) {
            quiz.score++;
        }
        quiz.questionIndex++;

        generate(quiz);
    }
}

function showProgress(quiz) {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(quiz) {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    gameOverHTML += "<div id=buttons><button id='retry' onclick=\"window.location.href='/game'\">Retry</button>";
    gameOverHTML += "<button id='answer' onclick=\"window.location.href='/game/answer'\">Get Answer</button></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

// get questions
var questions = [];

var url = '/game/questions';

var request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'text';

request.onload = () => { 
    if (request.readyState == request.DONE && request.status == 200) { 
        var questiondata = JSON.parse(request.responseText);

        var i;
        for (i = 0; i < questiondata.length; i++) { 
            var question = new Question(questiondata[i].question, questiondata[i].choices, questiondata[i].answer);
            questions.push(question);
        }

        // create quiz
        var quiz = new Quiz(questions);

        // display quiz
        generate(quiz);
    }
}

request.send();