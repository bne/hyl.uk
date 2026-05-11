const phrases = [
  "haggard youths languish",
  "hallowed years live",
  "halt your lurching",
  "hand your lantern",
  "handing you lemons",
  "handing your luggage",
  "happy yaks leap",
  "happy yogis laugh",
  "hardened yeomen labor",
  "hardened yetis lumber",
  "hardened yobs leer",
  "hardened yobs lurch",
  "hardy yeomen labor",
  "harried yuppies lurch",
  "harsh yells lacerate",
  "harsh yodels lament",
  "has yonder light",
  "hasty yaks lumber",
  "hasty yobs loot",
  "hasty yodelers laugh",
  "hasty youngsters laugh",
  "hateful yeoman lie",
  "haughty yields lessen",
  "haul your load",
  "haul your luggage",
  "haunted yachts list",
  "haunted yards loom",
  "haunted yearnings linger",
  "haunting yarns lull",
  "haunting yelps linger",
  "haunting youngsters linger",
  "hazardous yards lurk",
  "hazy yachts list",
  "hazy yarns lull",
  "hazy yesterdays lapse",
  "hazy younglings loiter",
  "he yanked leftward",
  "he yanked loose",
  "he yanks loose",
  "he yawned languidly",
  "he yawned lazily",
  "he yearned lastingly",
  "he yearned listlessly",
  "he yearned longingly",
  "he yearns lovingly",
  "he yelled loudly",
  "he yells lots",
  "he yelped loudly",
  "he yelps lots",
  "he yet laughs",
  "he yet lingered",
  "he yet lives",
  "he yet loiters",
  "he yielded little",
  "he yields little",
  "he yields loyally",
  "he yodeled loudly",
  "he yodeled lustily",
  "he yodels loudly",
  "he's yet lost",
  "he's yielding lately",
  "he's your landlord",
  "he's your lifeline",
  "heartfelt yearnings linger",
  "heated yaks lunge",
  "heated yarns liven",
  "heated yodelers lament",
  "heated youth lounges",
  "heavenly yields last",
  "heavy yearlings limp",
  "heavy yokes lacerate",
  "heavy yokes limit",
  "heed your limits",
  "heedless yearlings limp",
  "heedless yokels loot",
  "heedless youth loiters",
  "hefty yachts list",
  "hefty yaks lumber",
  "hello yellow llamas",
  "help yourself lad",
  "helpful yokels labor",
  "helpless yearlings limp",
  "her yak limped",
  "her yak lurched",
  "her yarn loosened",
  "her years lengthen",
  "her years lengthened",
  "her years linger",
  "her years loom",
  "her yodeling lapsed",
  "her youngest laughed",
  "her youngest lied",
  "her youngest lost",
  "her youth left",
  "her youth lingers",
  "her youthful laugh",
  "her youthful lies",
  "here you lapsed",
  "here you laughed",
  "here you learned",
  "here you linger",
  "here you lingered",
  "here you lived",
  "here you loved",
  "here you lurk",
  "heroic yetis leap",
  "heroic youths lead",
  "hesitant yaks linger",
  "hesitant younglings lurch",
  "hidden yawns linger",
  "hidden yearnings linger",
  "hide your loot",
  "high yelps linger",
  "hilarious yokels lark",
  "hilarious yuppies lounge",
  "his yak leapt",
  "his yarn lengthened",
  "his yearning lasted",
  "his years lapsed",
  "his years limited",
  "his yelling lapsed",
  "his yelling lingered",
  "his yellowed lamp",
  "his yellowed letter",
  "his yellowing leaves",
  "his yesterday lost",
  "his yodeling lulled",
  "his yoke lifted",
  "his youngest leapt",
  "his youngest loved",
  "his youth lingers",
  "his youth lost",
  "his youthful laugh",
  "hissing yappers lunge",
  "hissing yokels lurk",
  "hissing yuppies lurch",
  "hoarse yellers lament",
  "hoist your ladder",
  "hold your limpet",
  "hold your llama",
  "hollow yachts list",
  "hollow yearners languish",
  "hollow years last",
  "hollow years linger",
  "hollow yelps linger",
  "hollow yobs lurk",
  "hollow your log",
  "hollow youth laments",
  "honest yaks lope",
  "honest yearners live",
  "honest youth learns",
  "honestly you're lost",
  "honestly you're lucky",
  "hopeful yarns lull",
  "hopeful years loom",
  "hopeful yodelers laugh",
  "hopeful yogi lights",
  "hopeful youngsters listen",
  "hopeless yaks lumber",
  "hopeless yearners languish",
  "horses yawn lazily",
  "hot yams lure",
  "hover you loon",
  "how years lapse",
  "how years linger",
  "how yesterday lingers",
  "how you've lagged",
  "how you've lamented",
  "how you've lapsed",
  "how you've learned",
  "how you've lied",
  "how you've lingered",
  "how you've lived",
  "how you've longed",
  "how you've lost",
  "how you've loved",
  "how you've lumbered",
  "how's your luck",
  "how youth lapses",
  "howling yards liven",
  "howling yellow lightning",
  "howling yetis lunge",
  "howling younglings leap",
  "hug your llama",
  "huge yachts loom",
  "huge yeomen labor",
  "hulking yetis lumber",
  "humble yaks lumber",
  "humble yearners learn",
  "humble yelps linger",
  "humble yodelers learn",
  "humble yogis live",
  "humid yards linger",
  "hungry yabbos loot",
  "hungry yaks leap",
  "hungry yetis lurk",
  "hurl your lance",
  "hurl your lasso",
  "hurling yellow lemons",
  "hurling your lasso",
  "hurried yodelers lag",
  "hurried yuppies lurch",
  "hurry you laggard",
  "hushed yearnings linger",
  "hushed yellows lull",
  "hushed yodelers lament",
  "husky yeomen labor",
  "husky yetis lumber",
  "husky yodelers lament",
  "hyper yabbos leap",
  "hyper younglings leap",
]

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const FLIP_DURATION = 80
const STAGGER = 40

function randomChar() {
  return ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
}

function runTile(tile, finalChar, totalCycles) {
  let cycle = 0

  function doFlip() {
    tile.classList.remove('is-flipping')
    void tile.offsetWidth
    tile.classList.add('is-flipping')

    setTimeout(() => {
      cycle++
      if (cycle >= totalCycles) {
        tile.textContent = finalChar
      } else {
        tile.textContent = randomChar()
        setTimeout(doFlip, FLIP_DURATION / 2)
      }
    }, FLIP_DURATION / 2)
  }

  doFlip()
}

const phrase = phrases[Math.floor(Math.random() * phrases.length)]
const h1 = document.querySelector('h1')
const boldSecond = Math.random() < 0.5

let wordIndex = 0
phrase.split('').forEach((char, i) => {
  const isSpace = char === ' '
  if (isSpace) wordIndex++
  const tile = document.createElement('span')
  const isBold = !isSpace && (boldSecond ? wordIndex === 1 : wordIndex === 0 || wordIndex === 2)
  tile.className = isSpace ? 'tile tile--space' : isBold ? 'tile tile--bold' : 'tile'
  tile.textContent = isSpace ? '\u00A0' : randomChar()
  h1.appendChild(tile)

  if (!isSpace) {
    const cycles = i + 3 + Math.floor(Math.random() * 4)
    setTimeout(() => runTile(tile, char, cycles), i * STAGGER)
  }
})

const menuToggle = document.querySelector('#menu-toggle')
const menu = document.querySelector('#menu')

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active')
    menuToggle.setAttribute('aria-expanded', isOpen)
  })
}
