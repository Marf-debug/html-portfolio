function randomiser() {
    var temp = Math.floor(Math.random() * 6) + 1;
    return temp;
}

var randomNumber1 = randomiser();
var randomNumber2 = randomiser();

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

function winnerwinner(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
}
winnerwinner(randomNumber1, randomNumber2);
