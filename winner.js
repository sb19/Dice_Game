var dice1 = Math.floor(Math.random() * 6) + 1;
var imgSrc1 = "images/dice" + dice1 + ".png";

var dice2 = Math.floor(Math.random() * 6) + 1;
var imgSrc2 = "images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", imgSrc1);
document.querySelector(".img2").setAttribute("src", imgSrc2);

if (dice1 > dice2) {
  document.querySelector("h1").textContent = "🔥Player1 Wins";
} else if (dice2 > dice1) {
  document.querySelector("h1").textContent = "Player2 Wins🔥";
} else {
  document.querySelector("h1").textContent = "Its a Draw!";
}
