const phrases = [
  "haggard youth languishes",
  "halt your lurching",
  "hide yon lantern",
  "handing you lemons",
  "handling your luggage",
  "happy yaks leap",
  "happy yogis laugh",
  "hardened yeomen labor",
  "hardened yobs lurch",
  "harsh yells lacerate",
  "harsh yodels lament",
  "hast yonder light",
  "hasty yaks lumber",
  "hasty yobs loot",
  "hasty yodelers laugh",
  "hasty youngsters laugh",
  "hateful yobs lurk",
  "haughty yields lessen",
  "haul your load",
  "haul your luggage",
  "haunted yachts list",
  "haunted yards loom",
  "haunting yarns lull",
  "haunting yelps linger",
  "haunted youngsters linger",
  "hazy yesterdays lapse",
  "he yanked leftward",
  "he yanked loose",
  "he yawned languidly",
  "he yawned lazily",
  "he yearned lastingly",
  "he yearned listlessly",
  "he yearned longingly",
  "he yearns lovingly",
  "he yeeted limply",
  "he yelled loudly",
  "he yells lots",
  "he yelped loudly",
  "he yelps lots",
  "he yielded little",
  "he yodeled loudly",
  "he yodeled lustily",
  "he's yet lost",
  "he's yielding lately",
  "he's your landlord",
  "he's your lifeline",
  "heavenly yields last",
  "heavy yearlings limp",
  "heavy yokes lacerate",
  "heavy yokes limit",
  "heed your limits",
  "heedless youth loiters",
  "hefty yachts list",
  "hefty yaks lumber",
  "hello yellow llamas",
  "help yourself lad",
  "help yourself lass",
  "helpful yokels labor",
  "helpless yearlings limp",
  "her yak limped",
  "her yak lurched",
  "her yarn loosened",
  "her years lengthen",
  "her youngest laughed",
  "her youngest lied",
  "her youngest lost",
  "her youth left",
  "her youth lingers",
  "her youthful laugh",
  "her youthful lies",
  "here you laughed",
  "here you learned",
  "here you linger",
  "here you lurk",
  "heroic youths lead",
  "hidden yawns linger",
  "hidden yearnings linger",
  "hide your loot",
  "his yak leapt",
  "his yarn lengthened",
  "his yearning lasted",
  "his years lapsed",
  "his yellowed letter",
  "hazel yellowing leaves",
  "his yodeling lulled",
  "his youngest leapt",
  "his youngest loved",
  "his youthful laugh",
  "hoarse yellers lament",
  "hoist your ladder",
  "hold your limpet",
  "hold your llama",
  "hollow yachts list",
  "hollow years last",
  "hollow your log",
  "honest yearners live",
  "honest youth learns",
  "honestly you're lost",
  "honestly you're lucky",
  "hopeful years loom",
  "hopeful yodelers laugh",
  "hopefully youngsters listen",
  "horrible younglings loiter",
  "horses yawn lazily",
  "hover you loon",
  "how years lapse",
  "how yesterday lingers",
  "how you laughed",
  "how you've lagged",
  "how you've lamented",
  "how you've lapsed",
  "how you've learned",
  "how you've lied",
  "how you've lived",
  "how you've longed",
  "how you've lost",
  "how you've loved",
  "how you've lumbered",
  "how youth lapses",
  "how's your luck",
  "howard yeeted leslie",
  "howling yetis lunge",
  "hug your llama",
  "huge yeomen labor",
  "hulking yetis lumber",
  "humble yogis live",
  "hungry yaks leap",
  "hungry yetis lurk",
  "hurl your lance",
  "hurl your lasso",
  "hurling yellow lemons",
  "hurried yodelers lag",
  "hurry you laggard",
  "hushed yodelers lament",
  "husky yetis lumber",
  "hyper younglings leap",
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FLIP_DURATION = 80;
const STAGGER = 40;

function randomChar() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function runTile(tile, finalChar, totalCycles) {
  let cycle = 0;

  function doFlip() {
    tile.classList.remove("is-flipping");
    void tile.offsetWidth;
    tile.classList.add("is-flipping");

    setTimeout(() => {
      cycle++;
      if (cycle >= totalCycles) {
        tile.textContent = finalChar;
      } else {
        tile.textContent = randomChar();
        setTimeout(doFlip, FLIP_DURATION / 2);
      }
    }, FLIP_DURATION / 2);
  }

  doFlip();
}

document.addEventListener("DOMContentLoaded", () => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const h1 = document.querySelector("h1");
  const h1Link = document.createElement("a");
  h1Link.href = "/";
  h1.appendChild(h1Link);
  const boldSecond = Math.random() < 0.5;

  let wordIndex = 0;
  phrase.split("").forEach((char, i) => {
    const isSpace = char === " ";
    if (isSpace) wordIndex++;
    const tile = document.createElement("span");
    const isBold =
      !isSpace &&
      (boldSecond ? wordIndex === 1 : wordIndex === 0 || wordIndex === 2);
    tile.className = isSpace
      ? "tile tile--space"
      : isBold
        ? "tile tile--bold"
        : "tile";
    tile.textContent = isSpace ? "\u00A0" : randomChar();
    h1Link.appendChild(tile);

    if (!isSpace) {
      const cycles = i + 3 + Math.floor(Math.random() * 4);
      setTimeout(() => runTile(tile, char, cycles), i * STAGGER);
    }
  });
});

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}
