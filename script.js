//Timer Design (Also includes end-of-game action)
var secondsLeft = 60;
var scorecount = 0;
var HScore = 0;
var questionnumber=0
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
      if(secondsLeft<0 || questionnumber>9) {
        clearInterval(timerInterval);
        ScoreCompare();
      }
    }, 1000);
  };

//Sets of Questions and Answers
var questions = [
"Q1. Inside which HTML element do we put the JavaScript?",
"Q2. Where is the correct place to insert JavaScript?",
"Q3. How do you create a function in JavaScript?",
"Q4. How do you write an IF statement in JavaScript?",
"Q5. How do you write an IF statement for executing some code if var i is NOT equal to 5?",
"Q6. How does a WHILE loop start?",
"Q7. How does a FOR loop start?",
"Q8. How do you round the number 7.25, to the nearest integer?",
"Q9. How do you find the number with the highest value between x and y?",
"Q10. Which operator is used to assign a value to a variable?",
"Quiz Over",
"Quiz Over"
]
var A1Content = [
"<script>", 
"The <body> section", 
"function myFunction()", 
"if i 5 then",
"if i <> 5",
"from i=1 to 10",
"for (i = 0; i <= 5)",
"Math.round(7.25)", 
"Math.max(x, y)",
"x",
]

var A2Content = [
"<scripting>", 
"Both the <head> section and the <body> section are correct", 
"function = myFunction()", 
"if i = 5 then",
"if (i <> 5)",
"while (i <= 10; i++)",
"for i = 1 to 5",
"rnd(7.25)",
"ceil(x, y)",
"-"
]

var A3Content = [
"<js>",
"The <head> section",
"function:myFunction()",
"if i = 5",
"if (i != 5)",
"while (i <= 10)",
"for (i <= 5; i++)",
"round(7.25)",
"top(x, y)",
"."
]

var A4Content = [
"<javascript>", 
"The <css> section", 
"function src = myFunction()", 
"if i == 5 then",
"if i =! 5 then",
"while i 1-10",
"for (i = 1 to 10; i++)",
"Math.rnd(7.25)",
"Math.ceil(x, y)",
"="
]

var A5Content = [
"<css>", 
"The <h1> section",
"function = myFunction",
"if (i == 5)",
"if i !<>! 5 then",
"while i = 1 to 10",
"for (i = 0; i <= 5; i++)",
"Math.rndup(7.25)",
"Math.rnd(x, y)",
"--"
]

//Correct Answer Set (For Later Comparison)

var AnswerArray = [
"1", 
"2",
"1", 
"5",
"3",
"3",
"5",
"1",
"1",
"4",
]

//Display functions of questions and answers
var QNum = document.querySelector(".QuestionNumber");
var Q = document.querySelector(".QuestionContent");
var A1 = document.querySelector(".AnswerContent1");
var A2 = document.querySelector(".AnswerContent2");
var A3 = document.querySelector(".AnswerContent3");
var A4 = document.querySelector(".AnswerContent4");
var A5 = document.querySelector(".AnswerContent5");

function qNumdisplay(){
QNum.textContent = "Question Number: " + (questionnumber+1)
}
function questiondisplay(){
Q.textContent = questions[questionnumber]
}
function answer1display()
{A1.textContent = A1Content[questionnumber]
}
function answer2display()
{A2.textContent = A2Content[questionnumber]
}
function answer3display()
{A3.textContent = A3Content[questionnumber]
}
function answer4display()
{A4.textContent = A4Content[questionnumber]
}
function answer5display()
{A5.textContent = A5Content[questionnumber]
}


//Functions to check answer validity
function select1()
{if (AnswerArray[questionnumber]==="1")
  {CorrectAnswer()
  }
    else{IncorrectAnswer()
    }
}
function select2()
{if (AnswerArray[questionnumber]==="2")
  {CorrectAnswer()
  }
    else{IncorrectAnswer()
    }
}
function select3()
{if (AnswerArray[questionnumber]==="3")
  {CorrectAnswer()
  }
    else{IncorrectAnswer()
    }
}
function select4()
{if (AnswerArray[questionnumber]==="4")
  {CorrectAnswer()
  }
   else{IncorrectAnswer()
  }
}
function select5()
{if (AnswerArray[questionnumber]==="5")
  {CorrectAnswer()
  }
    else{IncorrectAnswer()
    }
}

//Answer Functions
var Score = document.querySelector(".Score");
function CorrectAnswer(){ 
  scorecount=scorecount+1;
  Score.textContent="Score: "+scorecount;
  NextQuestion()
}

function IncorrectAnswer(){ 
  secondsLeft =  secondsLeft-5
  timeEl.textContent = secondsLeft + " seconds left"
  NextQuestion()
}

//Next Question (Update Questions and Answers)
function NextQuestion(){
  questionnumber=questionnumber+1;
  qNumdisplay();
  questiondisplay();
  answer1display();
  answer2display();
  answer3display();
  answer4display();
  answer5display();
}

//Start Timer and first question
var StartBtn = document.querySelector(".StartBtn");
var timeEl = document.querySelector(".time");
function StartGame(){
  varsReset();
  GameMode();
  setTime();
  questiondisplay();
  answer1display();
  answer2display();
  answer3display();
  answer4display();
  answer5display();
}

//Start the quiz - show hidden HTML elements
function GameMode(){
  StartBtn.style.display="none"
  timeEl.style.display="block";
  Q.style.display="block";
  A1.style.display="inline";
  A2.style.display="inline";
  A3.style.display="inline";
  A4.style.display="inline";
  A5.style.display="inline";
  Score.style.display="block";
  QNum.style.display="block"
}

//Clear the screen at end of quiz - hide HTML elements
function EndMode(){
  StartBtn.style.display="block";
  timeEl.style.display="none";
  Q.style.display="none";
  A1.style.display="none";
  A2.style.display="none";
  A3.style.display="none";
  A4.style.display="none";
  A5.style.display="none";
  Score.style.display="none";
  QNum.style.display="none";
}

//Prompt for initials, handling of prompt cancel exception, check for new high score
function ScoreCompare(){
  var initials = prompt ("What are your initials? (only first three characters counted)");
  if (!initials) {
    initials="  ";
    EndMode();
  }
  name=initials.substring(0, 3);
  if (scorecount>HScore) {
  HighScore.textContent = ("HighScore: "+name +" " + scorecount);
  }
  lastScore();
  EndMode();
}

//Set up (reset) variables for quiz start/restart
function varsReset(){
  scorecount=0;
  secondsLeft=60;
  questionnumber=0;
  timeEl.textContent="60 seconds left";
  Score.textContent="Score: 0";
  QNum.textContent="Question Number: 1";
}

//Take in and save most recent score/initial set
var HighScore = document.querySelector(".HighScore");
var LastScore = document.querySelector(".LastScore");
function lastScore(){
  LastScore.textContent = ("Last Score: "+name +" " + scorecount);
}
