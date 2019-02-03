var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // second random number between 1-6


// change the dice images using the random numbers generated for each iamge
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// determine which dice img is higher and declare a winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 It's A Draw! 🚩";
}
