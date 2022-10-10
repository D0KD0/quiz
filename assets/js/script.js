// start variables clarification
var title = document.getElementById('title');
var body = document.getElementById('description');
var btn = document.querySelector('button');
var score = 0;


// timer clarification
var timer = document.createElement('timer');
var timeRemain = 100;

function countdown() {
    var timerInterval = setInterval(function() {
    timeRemain --;
    timer.textContent = 'Time Left : ' + timeRemain + ' sec';
    document.body.appendChild(timer);

    if(timeRemain <= 0 || score == 3)  {
        timer.textContent = 'Time Left : ' + timeRemain + ' sec';
        clearInterval(timerInterval);
    }
  }, 1000);
}

// quiz clarification
btn.addEventListener ('click', function () {
    countdown();
});

function questions() {

};

function inputName (){
    question.textContent = 'All done!';
    body.textContent = "Your score is " +secondLeft +'.';
    

    label.textContent = 'Enter name : ';


    input.setAttribute('width', '50%');

    document.body.appendChild(label).appendChild(input);


    var submitbtn = document.createElement('button');
    submitbtn.textContent = "submit";
    document.body.appendChild(submitbtn);
    
    
    submitbtn.addEventListener ('click', function(){
        localStorage.setItem("name", input.value);
        localStorage.setItem("score", secondLeft);
        submitbtn.remove();
        finalscore();
    });


}


function finalscore () {
    var myscore = localStorage.getItem("score");
    var myname = localStorage.getItem("name");

    input.textContent = "";
    label.textContent = "";
    body.textContent = "";  

    question.textContent = 'Highscores';


    var scoreboard = document.createElement('li');
    scoreboard.textContent = myname + ' - ' + myscore;

    document.body.append(scoreboard);


    var clearbtn = document.createElement('button');
    var gotobackbtn = document.createElement('button');

    clearbtn.textContent = 'Clear score';
    gotobackbtn.textContent = 'Go To Back'

    document.body.appendChild(clearbtn);
    document.body.appendChild(gotobackbtn);

    clearbtn.addEventListener('click', function() {
        scoreboard.remove();
    });

    gotobackbtn.addEventListener('click', function(){
        location.reload()}
        );
}




const questionOne = {
    question: 'Where is capital of South Korea?',
    answers: [
        { text: 'Seoul', correct: true },
        { text: 'Daegu', correct: false },
        { text: 'Busan', correct: false },
        { text: 'Pohang', correct: false }
    ] 
}

const questionTwo = {
    question: 'Which King invented Hangul',
    answers: [
        { text: 'Youngjo', correct: false },
        { text: 'Gwanghaegun', correct: false },
        { text: 'Seongjong', correct: false },
        { text: 'Sejong', correct: true }
    ]
}

const questionThree = {
    question: 'Which King invented Hangul',
    answers: [
        { text: 'Youngjo', correct: false },
        { text: 'Gwanghaegun', correct: false },
        { text: 'Seongjong', correct: false },
        { text: 'Sejong', correct: true }
    ]
}
