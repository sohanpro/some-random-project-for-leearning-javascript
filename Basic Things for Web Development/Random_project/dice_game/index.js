var random_num1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//alert(random_num1);

var connect_with_image = "dice" + random_num1 + ".png";

var show_image = "images/" + connect_with_image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", show_image);
var random_num2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var show_image2 = "images/dice" + random_num2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", show_image2);
if (random_num1 > random_num2) {
  document.querySelector("h1").innerHTML = "player 1 Wins!!!";
} else if (random_num1 == random_num2) {
  document.querySelector("h1").innerHTML = "Match Draw!!!";
} else {
  document.querySelector("h1").innerHTML = "player 2 Wins!!!";
}
