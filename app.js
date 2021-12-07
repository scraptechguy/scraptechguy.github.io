let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");


function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = "YOU WIN!"

    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300)
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = "YOU LOSE!"

    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300)
}

function draw(userChoice, compChoice) {
    result_p.innerHTML = "DRAW!"

    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 300)
}

function game(userChoice) {
    compChoice = getCompChoice();

    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissors_div.addEventListener('click', function() {
        game("s")
    })
}

main();


