const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const gif = document.getElementById("gif");

// INITIAL GIF
const initialGif = "gifs/cat1.gif";

// NO GIFS (5 stages)

const noGifs = [
  "gifs/cat2.gif",
  "gifs/cat3.gif",
  "gifs/cat4.gif",
  "gifs/cat5.gif",
  "gifs/cat6.gif"
];

// FINAL YES GIF
const yesFinalGif = "gifs/cat8.gif";

// SET INITIAL GIF
gif.src = initialGif;

/* ---------------- YES LOGIC ---------------- */

let yesClicks = 0;
const yesMessages = [
  "try clicking no to see what happen",
  "Go on.. Hit no! Just once",
  "you are missing out",
  "Click no, I dare you!!"
];

/* ---------------- NO LOGIC ---------------- */

let noClicks = 0;
let yesScale = 1;

const noTexts = [
  "Are you positive?",
  "Pokkie please... 😢",
  "if you say no, I will be really sad...",
  "I will be very sad... 😭",
  "Please???? 💔"
];

/* ---------------- YES BUTTON ---------------- */

yesBtn.addEventListener("click", () => {

  // If NO never clicked → show teasing messages
  if (noClicks === 0) {
    let text = yesMessages[yesClicks % yesMessages.length];
    showMessage(text);
    yesClicks++;
    return;
  }

  // FINAL ACCEPT
  gif.src = yesFinalGif;

  document.querySelector(".buttons").style.display = "none";
  showMessage("YAYYYYY 💖");
});

/* ---------------- NO BUTTON ---------------- */

noBtn.addEventListener("click", () => {

  if (noClicks < noTexts.length) {

    // Change GIF based on stage
    gif.src = noGifs[noClicks];

    // Change button text
    noBtn.innerText = noTexts[noClicks];

    // Make NO smaller
    let scaleDown = 1 - (noClicks * 0.18);
    noBtn.style.transform = `scale(${scaleDown})`;

    // Make YES bigger
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;

    noClicks++;

  } else {
    // FINAL MODE → NO runs away
    noBtn.addEventListener("mouseover", moveNo);
    noBtn.addEventListener("click", moveNo);
  }
});

/* ---------------- RUN AWAY ---------------- */

function moveNo() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* ---------------- MESSAGE (2 SEC) ---------------- */

function showMessage(text) {
  message.innerText = text;

  setTimeout(() => {
    message.innerText = "";
  }, 2000);
}