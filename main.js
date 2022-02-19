let life = "♥️";
let glives = 4;
let answer = Math.floor(Math.random() * 10) + 1;
let msg = document.getElementById("message");
let guessesNum = 0;
let userName = "";


function InitGame() {
    document.getElementById("Guess-button").hidden = true;
    document.getElementById("big").hidden = true;
}

function myName() {

    userName = document.getElementById('fname').value;
    if (userName !== '') {
        document.getElementById("fname").hidden = true;
        document.getElementById("big").hidden = false;
        play()

    } else {
        console.log('enter your name');
    }
}

function renderLives() {

    const elLives = document.getElementById('lives');
    elLives.innerText = '';
    for (let i = 0; i < glives; i++)
        elLives.innerText += life;
}

function play() {

    glives = 4;
    renderLives();
    document.getElementById("container").hidden = false;
    document.getElementById("bh").hidden = true;
    document.getElementById("Guess-button").hidden = false;
}

function checkAnswer() {

    let userGuess = document.getElementById("guess").value;

    if (Math.abs(userGuess - answer) == 1) {
        glives--;
        guessesNum++;
        renderLives()
        msg.textContent = "Hey " +userName + " You’re hot!";

    } else if (Math.abs(userGuess - answer) == 2) {
        glives--;
        guessesNum++;
        renderLives()
        msg.textContent = "Hey " +userName + " You’re Getting warmer…";
    } else if (userGuess > answer) {

        glives--;
        guessesNum++;
        renderLives()
        msg.textContent = "Hey " + userName + " Your guess is too High ";

    } else if (userGuess < answer) {

        glives--;
        guessesNum++;
        renderLives()
        msg.textContent = "Hey " +userName + " Your guess is Too low ";

    } else if (userGuess == answer && glives > 0) {

        guessesNum++;
        msg.textContent = "GOOD JOB " + userName + "!" + " The number was " + answer + " " + "and it only took you " + guessesNum + " tries";
        document.getElementById('myImage').src = 'img/8.gif';
        document.getElementById("container").hidden = false;
        document.getElementById("gameover").hidden = true;

    } if (glives == 0) {
        gameOver();
    }
}

function gameOver() {
    document.getElementById("container").hidden = false;
    msg.textContent = "GAME OVER"
    document.getElementById("newGame").hidden = false;
    document.getElementById('myImage').src = 'img/shake.gif';
    document.getElementById("guess").hidden = true;
    document.getElementById("gameover").hidden = true;
}



function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");

}

function numUp() {
    let up = document.getElementById("guess").value;
    if (up <= 9 && up >= 1) {
        up++;
        document.getElementById("guess").value = up;
    } else {
        document.getElementById("guess").value = up;
    }

}


function numDown() {
    let down = document.getElementById("guess").value;
    if (down <= 10 && down >= 2) {
        down--;
        document.getElementById("guess").value = down;
    } else {
        document.getElementById("guess").value = down;
    }
}





