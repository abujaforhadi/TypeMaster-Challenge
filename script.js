function randomAlphabet() {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    return randomAlphabet;
}

function setBackgroundColor(smallLetter) {
    console.log(smallLetter);
    var smallLetters = document.getElementById(smallLetter);
    if (smallLetters) {
        smallLetters.classList.add('bg-orange-400');
    }
}

function removeBackgroundColor(smallLetter) {
    console.log(smallLetter);
    var smallLetters = document.getElementById(smallLetter);
    if (smallLetters) {
        smallLetters.classList.remove('bg-orange-400');
    }
}

function keybordButtonPress(event) {
    var play = event.key;
    var smallLetter = play.toLowerCase();

    var currentLetter = document.getElementById("letter").innerHTML;
    currentLetter = currentLetter.toLowerCase();
    


    if (currentLetter === smallLetter) {
        var score = document.getElementById("score");
        score.innerHTML = parseInt(score.innerHTML) + 1;

        removeBackgroundColor(currentLetter);

        continueGame();
    }
    else {
        var life=document.getElementById("life").innerHTML;
        life=parseInt(life)-1;
        document.getElementById("life").innerHTML=life;
        if(life!=0){
            keybordButtonPress();
        }

        var currentLetter = document.getElementById("letter").innerHTML;
        currentLetter = currentLetter.toLowerCase();
        removeBackgroundColor(currentLetter);

        var score = document.getElementById("score").innerHTML;

        document.getElementById("scores").innerHTML = score;

        var game = document.getElementById("game");
        game.classList.add("hidden");

        var end = document.getElementById("end");
        end.classList.remove("hidden");

    }
}

document.addEventListener("keyup", keybordButtonPress);

function startGame() {
    var home = document.getElementById("home");
    home.classList.add("hidden");

    var game = document.getElementById("game");
    game.classList.remove("hidden");
    continueGame();


}
function continueGame() {
    var alphabets = randomAlphabet();
    var letter = document.getElementById("letter");
    letter.innerHTML = alphabets;

    var smallLetter = alphabets.toLowerCase();
    setBackgroundColor(smallLetter);

}
function restart() {
    var end = document.getElementById("end");
    end.classList.add("hidden");

    var game = document.getElementById("game");
    game.classList.remove("hidden");

    var score = document.getElementById("score");
    score.innerHTML = 0;
    continueGame();
    var life=document.getElementById("life");
    life.innerHTML=3;
}