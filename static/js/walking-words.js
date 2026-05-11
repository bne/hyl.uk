let phraseCount = 0;

async function initPhrases(sheetsUrl) {
  const response = await fetch(sheetsUrl);
  const data = await response.json();
  if (!data.values) {
    console.error("walking-words: no values in response", data.error ?? data);
    return;
  }

  const phrases = data.values.map((value) =>
    value[0].replace(/(<[^>]*>)|([^a-zA-Z0-9'!?.\s])/g, ""),
  );

  shuffle(phrases).forEach((phrase) => {
    const phraseContainer = document.createElement("div");
    phraseContainer.className = "phrase";
    document.body.appendChild(phraseContainer);

    phrase.split(" ").forEach((word) => {
      const wordEl = document.createElement("span");
      wordEl.className = "word";
      wordEl.textContent = word;
      phraseContainer.appendChild(wordEl);
    });

    phraseContainer.style.left = `${document.body.clientWidth / 2 - phraseContainer.clientWidth / 2}px`;
    phraseContainer.style.top = `${-(phraseContainer.clientHeight + 10)}px`;
  });

  animatePhrase();
}

function animatePhrase() {
  const phraseContainers = document.querySelectorAll(".phrase");
  const phrase = phraseContainers[phraseCount % phraseContainers.length];
  phraseCount++;

  const words = phrase.querySelectorAll(".word");
  const duration = randomInt(6000, 8000);

  // Calculate the actual pixel distance to the bottom of the visible window
  const phraseRect = phrase.getBoundingClientRect();
  const fallDistance = window.innerHeight - phraseRect.top;

  words.forEach((word, j) => {
    const direction = randomInt(-20, 20);
    const bounceHeight = randomInt(25, 75);

    const animation = word.animate(
      [
        { transform: "translateY(0)" },
        {
          transform: `translateY(${fallDistance - word.offsetHeight}px)`,
          opacity: 1,
        },
        {
          transform: `translate(${direction}vw, ${bounceHeight}vh) rotate(${direction * 100}deg)`,
          opacity: 0,
        },
      ],
      {
        duration,
        easing: "cubic-bezier(0.215, 0.51, 0.355, 1)",
        delay: j * 750,
      },
    );

    if (j === words.length - 1) {
      animation.addEventListener("finish", () => animatePhrase());
    }
  });
}
