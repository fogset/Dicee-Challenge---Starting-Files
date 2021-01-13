document.query
document.query
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomStringImage1 = "images/dice" + randomNumber1 + ".png";
var randomStringImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", randomStringImage1);
document.querySelector(".img2").setAttribute("src", randomStringImage2);
