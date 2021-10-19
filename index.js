const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var name = "";
var score = 0;
var i = 0;
var rightAns=0;
var wrongAns=0;

//Getting Questions object from another file
const questions=require("./questions");

//Starting Game
const start = () => {
    rl.question("\nPlease Enter Your Name :: ", (ans) => {
        name = ans;
        console.log(`\nWelcome ${name} In Game :: Do You Know MAHABHARAT`);
        console.log("\n=: Rules :=\n");
        console.log("There will be 5 questions in the game");
        console.log("For correct answer +5 and for wrong answer -2");
        quiz();
    });
}

const quiz = () => {
    if (i >= questions.length) {
        console.log("\n\n =: RESULT :=");
        console.log(`\nTotal Correct Answers :: ${rightAns}\nTotal Wrong Answers :: ${wrongAns}`);
        console.log(`\n${name} Your Final Score is :: ${score}`);
        rl.close();
        return;
    }
    console.log(`\nQuestion ${i + 1} :: ${questions[i].que}`);
    console.log();
    var j = 1;
    questions[i].opt.forEach((item) => {
        console.log(`(${j}).  ${item}`);
        j += 1;
    });
    askAnswer();
};

const askAnswer = () => {
    rl.question("\nEnter Your Option Number :: ", (res) => {
       
        // Fetching index of correct answers
        const index = questions[i].opt.indexOf(questions[i].ans);
        if (index == (res - 1)) {
            console.log("\nYour Answer is Correct...!\nYou Got 5 Score For this Question");
            score += 5;
            rightAns+=1;
        }
        else {
            console.log(`\nOpps Wrong Answer..!\nCorrect Answer is :: ${questions[i].ans}\nYou Got -2 Score For this question`);
            score -= 2;
            wrongAns+=1;
        }

        i++;
        quiz();
    });
};

start();
