const dice = [
  ["A", "G", "A", "E", "E", "N"],
  ["A", "S", "P", "F", "F", "K"],
  ["A", "W", "T", "O", "O", "T"],
  ["E", "E", "H", "N", "G", "W"],
  ["E", "Y", "T", "L", "R", "T"],
  ["H", "C", "P", "O", "A", "S"],
  ["I", "L", "R", "E", "D", "X"],
  ["M", "U", "Qu", "H", "N", "I"],
  ["N", "E", "I", "U", "E", "S"],
  ["O", "J", "B", "O", "A", "B"],
  ["S", "S", "O", "I", "T", "E"],
  ["T", "E", "R", "W", "H", "V"],
  ["T", "M", "I", "O", "C", "U"],
  ["T", "S", "T", "I", "Y", "D"],
  ["V", "E", "R", "L", "Y", "D"],
  ["Z", "H", "R", "L", "N", "N"],
];
const emptyChar = "?";
const pageTitle = document.title;
const timeLimit = 180;
let countdown = 0;
let timeout = null;

document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "complete") {
    const buggleContainer = document.createElement("div");
    buggleContainer.setAttribute("class", "buggle");
    dice.forEach(() => {
      dieContainer = document.createElement("span");
      buggleContainer.appendChild(dieContainer);
    });
    document.body.appendChild(buggleContainer);
    buggle();
  }
});

function buggle() {
  const buggleCells = document.querySelectorAll(".buggle span");
  dice
    .sort(() => Math.random() - 0.5)
    .forEach((die, i) => {
      die
        .sort(() => Math.random() - 0.5)
        .forEach((letter) => {
          buggleCells[i].innerHTML = letter;
        });
    });
  countdown = timeLimit;
  debuggle();
}

function debuggle() {
  clearTimeout(timeout);
  if (countdown === 0) {
    document.querySelectorAll(".buggle span").forEach((span) => {
      span.innerHTML = emptyChar;
    });
    document.title = pageTitle;
  } else {
    timeout = setTimeout(debuggle, 1000);
    countdown--;
    document.title = pageTitle.replace("Buggle", countdown);
  }
}
