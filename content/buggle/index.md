---
title: Buggle
layout: main
pagecss: |
  .buggle { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr; gap: 2px; width: min(80vw, calc(100vh - 75px - 2rem)); aspect-ratio: 1 / 1; position: fixed; top: 75px; right: 0; bottom: 0; left: 0; margin: auto; }
  .buggle span { background-color: #aaa; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: clamp(2rem, 10vw, 5rem); border-radius: 1rem; }
pagejsfile: buggle.js
---
