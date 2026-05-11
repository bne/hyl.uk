function randomInt(min, max) {
  return ~~(Math.random() * (max - min + 1) + min)
}

let phrases = [];
let phraseCount = 0;

async function initPhrases(sheetsUrl) {
  const response = await fetch(sheetsUrl);
  const data = await response.json();
  if (!data.values) {
    console.error('walking-words: no values in response', data.error ?? data);
    return;
  }
  phrases = data.values.map(value => value[0].replace(/(<[^>]*>)|([^a-zA-Z0-9'\!\?\.\s])/g, ''));

  phrases.sort(() => Math.random() - 0.5).forEach((phrase, i) => {
    const phraseContainer = document.createElement('div');
    phraseContainer.setAttribute('class', 'phrase');
    document.body.appendChild(phraseContainer);
    phrase.split(' ').forEach((word, j) => {
      wordContainer = document.createElement('span');
      wordContainer.append(word);
      wordContainer.setAttribute('class', 'word');
      phraseContainer.appendChild(wordContainer);
    });
    phraseContainer.style.left = (document.body.clientWidth / 2) - (phraseContainer.clientWidth / 2) + 'px'
  });
  animatePhrase();
}

function animatePhrase() {
  const phraseContainers = document.querySelectorAll('.phrase');
  const phrase = phraseContainers[phraseCount % phraseContainers.length];
  phraseCount++;

  const words = phrase.querySelectorAll('.word');
  const duration = randomInt(6000, 8000);

  words.forEach((word, j) => {
    const direction = randomInt(-20, 20) + 1;
    const bounceHeight = randomInt(25, 75);

    const animation = word.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translate(0, 100vh)', opacity: 1 },
        { transform: `translate(${direction}vw, ${bounceHeight}vh) rotate(${direction * 100}deg)`, opacity: 0 },
      ],
      {
        duration,
        easing: 'cubic-bezier(0.215, 0.51, 0.355, 1)',
        delay: (j * 750),
      }
    );

    animation.addEventListener('finish', e => {
      if (j == words.length - 1) {
        animatePhrase();
      }
    });
  });
}
