const words = {
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

  // Count correct letters (exact + misplaced)
  for (let i = 0; i < currentLength; i++) {
    if (guess[i] === secretWord[i]) {
      correctLetters++;
      usedPositions.push(i);
    }
  }

  // Check remaining correct letters (wrong position)
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
