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

function stopVideo() {
  videoPlayer.style.display = "none";
}

function startVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}

// Image Gallary

const gallary = document.querySelector(".gallary");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector(".img");
const overlayClose = overlay.querySelector(".close");

function generateHTML([h, v]) {
  return `
    <section class="item h${h} v${v}">
      <img src="gallary/${randomNumber(12)}.jpg">
        <section class="item__overlay">
          <button>View</button>
        </section>
    </section>
    `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(generateHTML).join("");
gallary.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click',
handleClick));

overlayClose.addEventListener('click', close);