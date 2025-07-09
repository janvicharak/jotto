/*const words = {
  easy: ["cat", "dog", "sun", "box", "hat", "pen", "run", "lip"],
  medium: ["film", "bank", "dust", "cord", "maze", "jump", "grow", "mind"],
  hard: ["plant", "bride", "shock", "trend", "lucky", "grind", "frost", "blame"]
};

let secretWord = "";
let currentLength = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("playerName").value.trim();
  const difficulty = document.getElementById("difficulty").value;

  if (!name) {
    alert("Please enter your name!");
    return;
  }

  const wordList = words[difficulty];
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  currentLength = secretWord.length;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");

  document.getElementById("playerDisplay").textContent = name;
  document.getElementById("modeDisplay").textContent = difficulty.toUpperCase();
  document.getElementById("lengthDisplay").textContent = currentLength;

  document.getElementById("guessInput").setAttribute("maxlength", currentLength);
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;
});

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = document.getElementById("guessInput").value.toLowerCase().trim();
  const log = document.getElementById("log");

  if (guess.length !== currentLength) {
    alert(`Your guess must be exactly ${currentLength} letters long.`);
    return;
  }

  let correctLetters = 0;
  const secretCopy = secretWord.split("");
  const usedPositions = [];

  for (let i = 0; i < currentLength; i++) {
    if (guess[i] === secretWord[i]) {
      correctLetters++;
      usedPositions.push(i);
    }
  }

  for (let i = 0; i < currentLength; i++) {
    if (!usedPositions.includes(i) && secretWord.includes(guess[i]) && guess[i] !== secretWord[i]) {
      const idx = secretWord.indexOf(guess[i]);
      if (!usedPositions.includes(idx)) {
        correctLetters++;
        usedPositions.push(idx);
      }
    }
  }

  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.innerHTML = `Guess: ${guess} ➤ <strong>${correctLetters}</strong> correct letter(s)`;
  log.prepend(entry);

  if (guess === secretWord) {
    const win = document.createElement("div");
    win.innerHTML = `<strong>🎉 You cracked the code! The word was: ${secretWord.toUpperCase()} 🎉</strong>`;
    win.style.color = "#0f0";
    log.prepend(win);
    document.getElementById("guessBtn").disabled = true;
  }

  document.getElementById("guessInput").value = "";
});

// Modal rules toggle
document.getElementById("showRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.remove("hidden");
});

document.getElementById("closeRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.add("hidden");
});*/
/*const words = {
  easy: ["cat", "dog", "sun", "box", "hat", "pen", "run", "lip"],
  medium: ["film", "bank", "dust", "cord", "maze", "jump", "grow", "mind"],
  hard: ["plant", "bride", "shock", "trend", "lucky", "grind", "frost", "blame"]
};

let secretWord = "";
let currentLength = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("playerName").value.trim();
  const difficulty = document.getElementById("difficulty").value;
  const errorBox = document.getElementById("errorMsg");

  if (!name) {
    errorBox.textContent = "⚠️ Please enter your name!";
    errorBox.classList.remove("hidden");
    return;
  } else {
    errorBox.classList.add("hidden");
  }

  const wordList = words[difficulty];
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  currentLength = secretWord.length;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");

  document.getElementById("playerDisplay").textContent = name;
  document.getElementById("modeDisplay").textContent = difficulty.toUpperCase();
  document.getElementById("lengthDisplay").textContent = currentLength;

  document.getElementById("guessInput").setAttribute("maxlength", currentLength);
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;
});

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = document.getElementById("guessInput").value.toLowerCase().trim();
  const log = document.getElementById("log");
  const errorBox = document.getElementById("errorMsg");

  if (guess.length !== currentLength) {
    errorBox.textContent = `⚠️ Your guess must be exactly ${currentLength} letters long.`;
    errorBox.classList.remove("hidden");
    return;
  } else {
    errorBox.classList.add("hidden");
  }

  let correctLetters = 0;
  const secretCopy = secretWord.split("");
  const usedPositions = [];

  for (let i = 0; i < currentLength; i++) {
    if (guess[i] === secretWord[i]) {
      correctLetters++;
      usedPositions.push(i);
    }
  }

  for (let i = 0; i < currentLength; i++) {
    if (
      !usedPositions.includes(i) &&
      secretWord.includes(guess[i]) &&
      guess[i] !== secretWord[i]
    ) {
      const idx = secretWord.indexOf(guess[i]);
      if (!usedPositions.includes(idx)) {
        correctLetters++;
        usedPositions.push(idx);
      }
    }
  }

  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.innerHTML = `Guess: ${guess} ➤ <strong>${correctLetters}</strong> correct letter(s)`;
  log.prepend(entry);

  if (guess === secretWord) {
    const win = document.createElement("div");
    win.innerHTML = `<strong>🎉 You cracked the code! The word was: ${secretWord.toUpperCase()} 🎉</strong>`;
    win.style.color = "#0f0";
    log.prepend(win);
    document.getElementById("guessBtn").disabled = true;
  }

  document.getElementById("guessInput").value = "";
});

// Rules Modal
document.getElementById("showRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.remove("hidden");
});

document.getElementById("closeRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.add("hidden");
});*/
/*const words = {
  hard: [ 
    "plant", "bride", "shock", "trend", "lucky", "grind", "frost", "blame",
    "night", "brick", "stone", "climb", "smile", "sugar", "glide",
  ]
};

let secretWord = "";
let currentLength = 5;

document.getElementById("startBtn").addEventListener("click", () => {
  const wordList = words.hard;
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");

  document.getElementById("guessInput").setAttribute("maxlength", currentLength);
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;
});

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = document.getElementById("guessInput").value.toLowerCase().trim();
  const log = document.getElementById("log");
  const errorBox = document.getElementById("errorMsg");

  if (guess.length !== currentLength) {
    errorBox.textContent = `⚠️ Your guess must be exactly ${currentLength} letters long.`;
    errorBox.classList.remove("hidden");
    return;
  } else {
    errorBox.classList.add("hidden");
  }

  let correctLetters = 0;
  const secretCopy = secretWord.split("");
  const usedPositions = [];

  for (let i = 0; i < currentLength; i++) {
    if (guess[i] === secretWord[i]) {
      correctLetters++;
      usedPositions.push(i);
    }
  }

  for (let i = 0; i < currentLength; i++) {
    if (
      !usedPositions.includes(i) &&
      secretWord.includes(guess[i]) &&
      guess[i] !== secretWord[i]
    ) {
      const idx = secretWord.indexOf(guess[i]);
      if (!usedPositions.includes(idx)) {
        correctLetters++;
        usedPositions.push(idx);
      }
    }
  }

  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.innerHTML = `Guess: ${guess} ➤ <strong>${correctLetters}</strong> correct letter(s)`;
  log.prepend(entry);

  if (guess === secretWord) {
    const win = document.createElement("div");
    win.innerHTML = `<strong>🎉 You cracked the code! The word was: ${secretWord.toUpperCase()} 🎉</strong>`;
    win.style.color = "#0f0";
    log.prepend(win);
    document.getElementById("guessBtn").disabled = true;
  }

  document.getElementById("guessInput").value = "";
});

// Rules Modal
document.getElementById("showRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.remove("hidden");
});

document.getElementById("closeRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.add("hidden");
});
 
document.getElementById("revealBtn").addEventListener("click", () => {
  const log = document.getElementById("log");
  const reveal = document.createElement("div");
  reveal.innerHTML = `<strong>❗ The correct word was: ${secretWord.toUpperCase()}</strong>`;
  reveal.style.color = "#f55";
  log.prepend(reveal);
  document.getElementById("guessBtn").disabled = true;
});

document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("setup").classList.remove("hidden");
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;
  document.getElementById("errorMsg").classList.add("hidden");
});*/

const words = {
  easy: ["cat", "dog", "sun", "box", "hat", "pen", "run", "lip", "fan", "net", "bat"],
  medium: ["film", "bank", "dust", "cord", "maze", "jump", "grow", "mind", "bold", "tent", "clip"],
  hard: ["plant", "bride", "shock", "trend", "lucky", "grind", "frost", "blame", "night", "stone", "climb"]
};

let secretWord = "";
let currentLength = 0;
let currentDifficulty = "";

document.getElementById("startBtn").addEventListener("click", () => {
  const difficulties = ["easy", "medium", "hard"];
  currentDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  const wordList = words[currentDifficulty];

  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  currentLength = secretWord.length;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");

  document.getElementById("guessInput").setAttribute("maxlength", currentLength);
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;

  document.getElementById("lengthDisplay").textContent = currentLength;
  /*document.getElementById("difficultyDisplay").textContent = currentDifficulty.toUpperCase();*/
});

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = document.getElementById("guessInput").value.toLowerCase().trim();
  const log = document.getElementById("log");
  const errorBox = document.getElementById("errorMsg");

  if (guess.length !== currentLength) {
    errorBox.textContent = `⚠️ Your guess must be exactly ${currentLength} letters long.`;
    errorBox.classList.remove("hidden");
    return;
  } else {
    errorBox.classList.add("hidden");
  }

  let correctLetters = 0;
  const usedPositions = [];

  for (let i = 0; i < currentLength; i++) {
    if (guess[i] === secretWord[i]) {
      correctLetters++;
      usedPositions.push(i);
    }
  }

  for (let i = 0; i < currentLength; i++) {
    if (
      !usedPositions.includes(i) &&
      secretWord.includes(guess[i]) &&
      guess[i] !== secretWord[i]
    ) {
      const idx = secretWord.indexOf(guess[i]);
      if (!usedPositions.includes(idx)) {
        correctLetters++;
        usedPositions.push(idx);
      }
    }
  }

  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.innerHTML = `Guess: ${guess} ➤ <strong>${correctLetters}</strong> correct letter(s)`;
  log.prepend(entry);

  if (guess === secretWord) {
    const win = document.createElement("div");
    win.innerHTML = `<strong>🎉 You cracked the code! The word was: ${secretWord.toUpperCase()} 🎉</strong>`;
    win.style.color = "#0f0";
    log.prepend(win);
    document.getElementById("guessBtn").disabled = true;
  }

  document.getElementById("guessInput").value = "";
});

document.getElementById("revealBtn").addEventListener("click", () => {
  const log = document.getElementById("log");
  const reveal = document.createElement("div");
  reveal.innerHTML = `<strong>❗ The correct word was: ${secretWord.toUpperCase()}</strong>`;
  reveal.style.color = "#f55";
  log.prepend(reveal);
  document.getElementById("guessBtn").disabled = true;
});

document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("setup").classList.remove("hidden");
  document.getElementById("guessInput").value = "";
  document.getElementById("log").innerHTML = "";
  document.getElementById("guessBtn").disabled = false;
  document.getElementById("errorMsg").classList.add("hidden");
});

document.getElementById("showRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.remove("hidden");
});

document.getElementById("closeRulesBtn").addEventListener("click", () => {
  document.getElementById("rulesModal").classList.add("hidden");
});
