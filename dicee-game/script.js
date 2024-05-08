function refreshResult() { }

function getRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 6));
    return randomNumber;
}
let randomNumber1 = getRandomNumber();
let randomNumber2 = getRandomNumber();

function whichDice(imgClass, number) {
    let srcArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
    // console.log("Image with number " + (number + 1) + ": " + srcArray[number]);
    let randomSrc = srcArray[number];
    const imageTag = document.querySelector(imgClass);
    imageTag.setAttribute("src", randomSrc);

    return srcArray;
}
whichDice('.img1', randomNumber1);
whichDice('.img2', randomNumber2);

function whoWin(dice1, dice2) {
    let result = "Draw!";
    if (dice1 > dice2) {
        result = "👍 Player 1 Wins!";
    }
    if (dice1 < dice2) {
        result = "Player 2 Wins! 👍";
    }
    document.querySelector("h1").innerHTML = result;
}
whoWin(randomNumber1, randomNumber2);

const refreshButton = document.getElementById("btn");
// console.log(refreshButton);
refreshButton.addEventListener("click", function (){location.href = location.href;
});