//alert('Welcome to Cyril's')

// JavaScript for Toggle Menu

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-12.5rem";
}

var navLinks1 = document.getElementById("navLinks1");

function showMenu1() {
  navLinks1.style.right = "0";
}
function hideMenu1() {
  navLinks1.style.right = "-12.5rem";
}

// JavaScript for Video Player

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
  videoPlayer.style.display = "none";
}

function startVideo(file){
  myVideo.src = file;
  videoPlayer.style.display = "block";
}