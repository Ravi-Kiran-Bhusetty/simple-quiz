var readlinesync = require('readline-sync');

var highscore = {
    name: "",
    score: 0
};

do {

    let score = 0;
    let userName = readlinesync.question(
        "\nWelcome to Ravi's quiz!. Please enter your name to continue or type exit to quit\n");
    if(userName.toLowerCase() === 'exit') {
        console.log("Good bye. Have a great day!");
        break;
    }
    
    let questions = [
        {
            question: "What is Ravi's last name",
            answer: "Bhushetty"
        },
        {
            question: "What is Ravi's age",
            answer: "25"
        },
        {
            question: "Where does Ravi work",
            answer: "Oracle"
        }
    ];

    for(let i = 0; i < questions.length; i++) {
        play(questions[i].question, questions[i].answer);
    }

    function play(question, answer) {
        let userAnswer = readlinesync.question(question + "\n");
        if(userAnswer.toLowerCase() === answer.toLowerCase()) {
            score++;
            console.log("Correct!");
        } else {
            console.log("Wrong!");
        }
    }

    console.log("Quiz over!!! Your final score is: ", score + "\n");

    if(score > 0 && score > highscore.score) {
        console.log("Hurray! You hit a high score.\n");
        highscore.name = userName;
        highscore.score = score;
    }
    console.log((highscore.score > 0) ? 
        ("High Score Details:\nName: " + highscore.name + "\nScore: " + highscore.score) : "Better luck next time");

}while(true);


