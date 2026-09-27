const SITE_PASSWORD = "2809";

const envelope = document.querySelector("#envelope");
const sealButton = document.querySelector("#sealButton");
const sealHint = document.querySelector("#sealHint");
const passwordPanel = document.querySelector("#passwordPanel");
const passwordInput = document.querySelector("#passwordInput");
const passwordMessage = document.querySelector("#passwordMessage");
const welcome = document.querySelector("#welcome");

const videoSection = document.querySelector("#videoSection");
const surpriseVideo = document.querySelector("#surpriseVideo");
const videoLoading = document.querySelector("#videoLoading");
const videoNote = document.querySelector("#videoNote");
const playFallback = document.querySelector("#playFallback");
const continueButton = document.querySelector("#continueButton");

const postVideo = document.querySelector("#postVideo");
const footer = document.querySelector("#footer");
const puzzleGrid = document.querySelector("#puzzleGrid");
const resetPuzzle = document.querySelector("#resetPuzzle");
const hintText = document.querySelector("#hintText");
const photoReveal = document.querySelector("#photoReveal");
const memoryPhoto = document.querySelector("#memoryPhoto");
const photoPlaceholder = document.querySelector("#photoPlaceholder");
const confettiLayer = document.querySelector("#confettiLayer");

let nextPuzzlePiece = 0;
const correctPuzzleOrder = [2, 0, 3, 1];

function launchConfetti(amount = 38) {
  const colors = ["#ffd86c", "#f16b9c", "#8d56dc", "#75d3d0", "#fff4dd"];

  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty(
      "--drift",
      (Math.random() - 0.5) * 260 + "px"
    );
    piece.style.animationDelay = Math.random() * 0.6 + "s";
    piece.style.transform = "rotate(" + Math.random() * 180 + "deg)";
    confettiLayer.appendChild(piece);

    window.setTimeout(() => piece.remove(), 3600);
  }
}

function openEnvelope() {
  envelope.classList.add("opened");
  sealButton.disabled = true;
  sealHint.textContent =
    "The envelope is open. Enter the secret password below.";
  passwordPanel.hidden = false;

  window.setTimeout(() => passwordInput.focus(), 550);
}

function unlockVideo() {
  passwordPanel.hidden = true;
  sealHint.textContent = "Unlocked — your surprise is ready.";
  welcome.classList.add("completed");
  videoSection.hidden = false;
  videoSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  surpriseVideo.currentTime = 0;

  const playRequest = surpriseVideo.play();

  if (playRequest && typeof playRequest.catch === "function") {
    playRequest.catch(() => {
      playFallback.hidden = false;
      videoNote.textContent = "Press play when you are ready.";
    });
  }
}

sealButton.addEventListener("click", openEnvelope);

passwordPanel.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword !== SITE_PASSWORD) {
    passwordMessage.textContent =
      "That password is not quite right. Try again.";

    passwordInput.select();

    passwordInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-7px)" },
        { transform: "translateX(7px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 280 }
    );

    return;
  }

  passwordMessage.textContent = "";
  unlockVideo();
});

surpriseVideo.addEventListener("loadeddata", () => {
  videoLoading.hidden = true;
});

surpriseVideo.addEventListener("canplay", () => {
  videoLoading.hidden = true;
});

surpriseVideo.addEventListener("error", () => {
  videoLoading.hidden = true;
  videoNote.textContent =
    "Add your complete video at assets/video/02.mp4.";
  playFallback.hidden = true;
});

surpriseVideo.addEventListener("play", () => {
  videoLoading.hidden = true;
  playFallback.hidden = true;
  videoNote.textContent = "Playing your surprise…";
});

surpriseVideo.addEventListener("ended", () => {
  videoNote.textContent = "That was made especially for you.";
  continueButton.hidden = false;
  launchConfetti(46);
});

playFallback.addEventListener("click", () => {
  surpriseVideo.play().catch(() => {
    videoNote.textContent =
      "Use the play button on the video to begin.";
  });
});

continueButton.addEventListener("click", () => {
  postVideo.hidden = false;
  footer.hidden = false;
  observeRevealSections();

  postVideo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

function shuffledPieces() {
  const pieces = [0, 1, 2, 3];

  for (let index = pieces.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [pieces[index], pieces[randomIndex]] = [
      pieces[randomIndex],
      pieces[index],
    ];
  }

  return pieces;
}

function buildPuzzle() {
  nextPuzzlePiece = 0;
  puzzleGrid.innerHTML = "";
  photoReveal.classList.remove("is-visible");
  hintText.textContent = "Hint: start with the brightest corner.";

  const cardColors = [
    "#7352b4",
    "#dc668f",
    "#44becd",
    "#ffc879",
  ];

  shuffledPieces().forEach((pieceNumber, position) => {
    const card = document.createElement("button");

    card.className = "puzzle-card";
    card.type = "button";
    card.dataset.piece = String(pieceNumber);
    card.style.setProperty(
      "--card-color",
      cardColors[pieceNumber]
    );
    card.setAttribute(
      "aria-label",
      "Memory piece " + (position + 1)
    );
    card.innerHTML = "<span>?</span>";

    card.addEventListener("click", () => {
      choosePuzzlePiece(card, pieceNumber);
    });

    puzzleGrid.appendChild(card);
  });
}

function choosePuzzlePiece(card, pieceNumber) {
  if (card.disabled) {
    return;
  }

  if (pieceNumber !== correctPuzzleOrder[nextPuzzlePiece]) {
    hintText.textContent =
      "Not that one yet — follow the hint and try again.";

    card.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 250 }
    );

    return;
  }

  card.disabled = true;
  card.classList.add("is-picked");
  card.querySelector("span").textContent = "✦";
  nextPuzzlePiece += 1;

  if (nextPuzzlePiece === correctPuzzleOrder.length) {
    hintText.textContent =
      "Perfect. A favorite memory is waiting below.";

    photoReveal.classList.add("is-visible");
    photoReveal.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    launchConfetti(28);
    return;
  }

  const remaining =
    correctPuzzleOrder.length - nextPuzzlePiece;

  hintText.textContent =
    "Beautiful. " +
    remaining +
    " piece" +
    (remaining === 1 ? "" : "s") +
    " left.";
}

resetPuzzle.addEventListener("click", buildPuzzle);

function updatePhotoState() {
  const photoFrame = photoReveal.querySelector(".photo-frame");

  if (memoryPhoto.naturalWidth > 0) {
    photoFrame.classList.add("photo-loaded");
    photoPlaceholder.hidden = true;
  } else {
    photoFrame.classList.remove("photo-loaded");
    photoPlaceholder.hidden = false;
  }
}

memoryPhoto.addEventListener("load", updatePhotoState);
memoryPhoto.addEventListener("error", updatePhotoState);

updatePhotoState();

let revealObserver;

function observeRevealSections() {
  const revealSections =
    document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    revealSections.forEach((section) => {
      section.classList.add("visible");
    });

    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });
}

buildPuzzle();
