const _autoplayMs = (() => {
  const raw = new URL(import.meta.url).search.slice(1);
  const val = new URLSearchParams(decodeURIComponent(raw)).get("autoplay");
  if (val === null) return null;
  const n = Number(val);
  return Number.isFinite(n) && n > 0 ? n : 2000;
})();

document.addEventListener("DOMContentLoaded", () => {
  const imageStack = document.createElement("div");
  imageStack.id = "image-stack";
  document.body.appendChild(imageStack);

  const triggerContainer = document.createElement("div");
  triggerContainer.id = "trigger-container";
  document.body.appendChild(triggerContainer);

  const images = [
    "PXL_20250115_092404629.jpg",
    "PXL_20250123_093741898.jpg",
    "PXL_20250125_134827042.jpg",
    "PXL_20250127_091757869.jpg",
    "PXL_20250203_085743235.jpg",
    "PXL_20250204_094201694.jpg",
    "PXL_20250210_085102800.jpg",
    "PXL_20250212_084607006.jpg",
    "PXL_20250214_081110959.jpg",
    "PXL_20250218_091901256.jpg",
    "PXL_20250219_105107591.jpg",
    "PXL_20250219_105149511.jpg",
    "PXL_20250222_105728694.jpg",
    "PXL_20250222_105811331.jpg",
    "PXL_20250223_104615186.jpg",
    "PXL_20250225_105214994.jpg",
    "PXL_20250228_102612114.jpg",
    "PXL_20250305_095556369.jpg",
    "PXL_20250307_095855861.jpg",
    "PXL_20250312_085546098.jpg",
    "PXL_20250314_091036835.jpg",
    "PXL_20250319_083648286.jpg",
    "PXL_20250324_091415841.jpg",
    "PXL_20250328_083231116.jpg",
    "PXL_20250331_111507519.jpg",
    "PXL_20250402_074314839.jpg",
    "PXL_20250404_081937973.jpg",
    "PXL_20250409_070742272.jpg",
    "PXL_20250414_071212672.jpg",
    "PXL_20250415_070456919.jpg",
    "PXL_20250417_071537556.jpg",
    "PXL_20250420_093232104.jpg",
    "PXL_20250422_065325682.jpg",
    "PXL_20250424_090101331.jpg",
    "PXL_20250428_071601569.jpg",
    "PXL_20250430_073103890.jpg",
    "PXL_20250501_070932897.jpg",
    "PXL_20250504_103855493.jpg",
    "PXL_20250506_071926402.jpg",
    "PXL_20250513_071842417.jpg",
    "PXL_20250517_105949648.jpg",
    "PXL_20250521_080129379.jpg",
    "PXL_20250523_084514933.jpg",
    "PXL_20250527_080231350.jpg",
    "PXL_20250529_072523339.jpg",
    "PXL_20250529_072523565.jpg",
    "PXL_20250601_082222443.jpg",
    "PXL_20250606_073153711.jpg",
    "PXL_20250609_072257893.jpg",
    "PXL_20250616_083350229.jpg",
    "PXL_20250621_061734283.jpg",
    "PXL_20250623_084507520.jpg",
    "PXL_20250625_081335815.jpg",
    "PXL_20250626_091853947.jpg",
    "PXL_20250701_075351387.jpg",
    "PXL_20250702_083631094.jpg",
    "PXL_20250703_083950767.jpg",
    "PXL_20250713_082916857.jpg",
    "PXL_20250722_080819107.jpg",
    "PXL_20250728_074545520.jpg",
    "PXL_20250803_092933512.jpg",
    "PXL_20250804_081733829.jpg",
    "PXL_20250811_075927955.jpg",
    "PXL_20250815_080046776.jpg",
    "PXL_20250821_073751171.jpg",
    "PXL_20250826_140532638.jpg",
    "PXL_20250828_092613238.jpg",
    "PXL_20250901_072412296.jpg",
    "PXL_20250903_091936565.jpg",
    "PXL_20250906_085713133.jpg",
    "PXL_20250913_092729778.jpg",
    "PXL_20250915_070858850.jpg",
    "PXL_20250917_095226140.jpg",
    "PXL_20250922_100757149.jpg",
    "PXL_20250924_071150118.jpg",
    "PXL_20250926_075308959.jpg",
    "PXL_20250928_132905062.jpg",
    "PXL_20251001_104459987.jpg",
    "PXL_20251005_123749275.jpg",
    "PXL_20251007_080753706.jpg",
    "PXL_20251010_082224493.jpg",
    "PXL_20251013_103457363.jpg",
    "PXL_20251014_094900816.jpg",
    "PXL_20251015_081522908.jpg",
    "PXL_20251019_094020854.jpg",
    "PXL_20251022_103106236.jpg",
    "PXL_20251023_094720292.jpg",
    "PXL_20251025_114911364.jpg",
    "PXL_20251028_084741910.jpg",
    "PXL_20251030_111304774.jpg",
    "PXL_20251031_094218313.jpg",
    "PXL_20251102_111222787.jpg",
    "PXL_20251103_085722655.jpg",
    "PXL_20251105_103043288.jpg",
    "PXL_20251106_084041161.jpg",
    "PXL_20251117_152910497.jpg",
    "PXL_20251121_101127018.jpg",
    "PXL_20251123_104320402.jpg",
    "PXL_20251124_122722887.jpg",
    "PXL_20251126_105807479.jpg",
    "PXL_20251127_111948601.jpg",
    "PXL_20251130_101250942.jpg",
    "PXL_20251202_103354090.jpg",
    "PXL_20251204_090154271.jpg",
    "PXL_20251208_110603274.jpg",
    "PXL_20251209_104720864.jpg",
    "PXL_20251210_082828059.jpg",
    "PXL_20251212_092028779.jpg",
    "PXL_20251213_131019590.jpg",
    "PXL_20251215_133515242.jpg",
    "PXL_20251219_153707656.jpg",
    "PXL_20251229_160004475.jpg",
    "PXL_20251231_122308018.jpg",
  ];

  const fileDateRegex =
    /^PXL_(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})(\d{3})\.jpg$/;
  const today = new Date();
  const todayMMDD = today.getMonth() * 100 + today.getDate();
  let prevDate = null;
  let prevMMDD = null;
  let scrollToElement = null;

  images.forEach((imageName, idx) => {
    const img = document.createElement("img");
    img.dataset.src = `/oak/img/${imageName}`;

    const [_, year, month, day, hour, minute, second, ms] =
      imageName.match(fileDateRegex);
    const fileDate = new Date(year, month - 1, day, hour, minute, second, ms);
    img.alt = fileDate.toDateString();
    imageStack.appendChild(img);

    const trigger = document.createElement("div");
    trigger.className = "scroll-trigger";
    trigger.dataset.index = idx;
    trigger.title = fileDate.toDateString();
    triggerContainer.appendChild(trigger);

    const fileMMDD = fileDate.getMonth() * 100 + fileDate.getDate();
    if (prevDate && todayMMDD >= prevMMDD && todayMMDD <= fileMMDD) {
      scrollToElement = trigger;
    }

    prevDate = fileDate;
    prevMMDD = fileMMDD;
  });

  const allImgs = document.querySelectorAll("#image-stack img");
  let initialIndex;

  if (scrollToElement) {
    scrollToElement.scrollIntoView();
    initialIndex = Number.parseInt(scrollToElement.dataset.index);
  } else {
    // today is past the last image date (end of year), scroll to last
    const triggers = document.querySelectorAll(".scroll-trigger");
    triggers[triggers.length - 1].scrollIntoView();
    initialIndex = images.length - 1;
  }

  const loadImg = (i) => {
    const img = allImgs[i];
    if (img && !img.getAttribute("src")) img.src = img.dataset.src;
  };

  loadImg(initialIndex - 1);
  loadImg(initialIndex);
  loadImg(initialIndex + 1);
  allImgs[initialIndex].classList.add("active");
  let lastIndex = initialIndex;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentIndex = Number.parseInt(entry.target.dataset.index);
          loadImg(currentIndex - 1);
          loadImg(currentIndex);
          loadImg(currentIndex + 1);

          allImgs.forEach((img, i) => {
            if (i === currentIndex) {
              img.classList.add("active");
              img.classList.remove("last-active");
            } else if (i === lastIndex) {
              img.classList.remove("active");
              img.classList.add("last-active");
            } else {
              img.classList.remove("active", "last-active");
            }
          });

          lastIndex = currentIndex;
        }
      });
    },
    { threshold: 0.5 },
  );

  const allTriggers = document.querySelectorAll(".scroll-trigger");
  allTriggers.forEach((trigger) => {
    observer.observe(trigger);
  });

  if (_autoplayMs !== null) {
    let autoIdx = initialIndex;
    setInterval(() => {
      autoIdx = (autoIdx + 1) % allTriggers.length;
      allTriggers[autoIdx].scrollIntoView({ behavior: "instant" });
    }, _autoplayMs);
  }
});
