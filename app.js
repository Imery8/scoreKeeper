const btnP1 = document.querySelector(".btnP1");
const btnP2 = document.querySelector(".btnP2");
const btnReset = document.querySelector(".btnReset");
const playingTo = document.querySelector("#playTo");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

let p1Score = 0;
let p2Score = 0;

let playingToNum = parseInt(playingTo.value);

playingTo.addEventListener("change", () => {
    playingToNum = parseInt(playingTo.value);
    gameReset();
    return playingToNum;
});

btnP1.addEventListener("click", () => {
p1Score += 1;
score1.innerText = p1Score;
checkWinner();
});

btnP2.addEventListener("click", () => {
p2Score += 1;
score2.innerText = p2Score;
checkWinner();
});

const btnDisable = () => {
    btnP1.disabled = true;
    btnP2.disabled = true;
}

const checkWinner = () => {
    if (p1Score === playingToNum) {
        btnDisable();
        btnP1.innerText = "Winner";
        btnP2.innerText = "Loser";
        btnP1.classList.add("winnerColor");
        btnP2.classList.add("loserColor");
        score1.classList.add("winnerScoreColor");
        score2.classList.add("loserScoreColor");
    } else if (p2Score === playingToNum) {
        btnDisable()
        btnP2.innerText = "Winner";
        btnP1.innerText = "Loser";
        btnP2.classList.add("winnerColor");
        btnP1.classList.add("loserColor");
        score2.classList.add("winnerScoreColor");
        score1.classList.add("loserScoreColor");
    } else {
        return null;
    }
}

const gameReset = () => {
    btnP1.disabled = false;
    btnP2.disabled = false;
    p1Score = 0;
    p2Score = 0;
    score1.innerText = "0";
    score2.innerText = "0";
    btnP1.innerText = "+1 Player One";
    btnP2.innerText = "+1 Player Two";

    if (btnP1.classList.contains("winnerColor")) {
        btnP1.classList.remove("winnerColor");
        btnP2.classList.remove("loserColor");
        score1.classList.remove("winnerScoreColor");
        score2.classList.remove("loserScoreColor");
    } else if (btnP1.classList.contains("loserColor")) {
        btnP2.classList.remove("winnerColor");
        btnP1.classList.remove("loserColor");
        score2.classList.remove("winnerScoreColor");
        score1.classList.remove("loserScoreColor");
    } else {
        return null;
    }
}

btnReset.addEventListener("click", () => {
    gameReset();
});

