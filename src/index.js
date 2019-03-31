import mzr from "rdmkit-mzr";
import cpl from "rdmkit-cpl";
import vrt from "rdmkit-vrt";
import rdm from "rdmkit-rdm";

import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";

import "prismjs";

// mzr();
cpl();
var runVert = vrt();
// rdm(".hero");

// toggleActivated
function toggleActivated(el) {
  el.classList.toggle("active");
}

// Spacing
const spacingBtn = document.querySelector("[rel='spacing']");
const pagraphs = document.querySelectorAll("p, ul");
spacingBtn.addEventListener("click", spaceText);

function spaceText() {
  toggleActivated(spacingBtn);
  for (let p of pagraphs) {
    p.classList.toggle("spacing");
  }
}

// Style headings
const hierarchyBtn = document.querySelector("[rel='hierarchy']");
const hgroups = document.querySelectorAll("hgroup");
hierarchyBtn.addEventListener("click", styleHeadings);

function styleHeadings() {
  toggleActivated(hierarchyBtn);
  for (let h of hgroups) {
    h.classList.toggle("hierarchy");
  }
}

// Show MZR
const measureBtn = document.querySelector("[rel='mzr']");
const measureP = document.querySelector("[data-mzr]");
let mzrOn = false;
measureBtn.addEventListener("click", showMZR);

function showMZR() {
  toggleActivated(measureBtn);

  if (mzrOn === false) {
    mzr();
    mzrOn = true;
  } else {
    measureP.textContent = `I'd say that the biggest issue right now is that the lines are way to long and they are touching each side of the browser window. We need margins. In print we need margins for protecting the text or making notes. However, online, we just need margins for separating site sections and making text look good. We have so much flexable space to use. We need to take advantage of this.`;
    mzrOn = false;
  }
}

const root = document.documentElement;
const desktopBtn = document.querySelector("[rel='desktop']");
// const tablet = document.querySelector("[rel='tablet']");
// const mobile = document.querySelector("[rel='mobile']");

desktopBtn.addEventListener("click", toggleMargins);

function toggleMargins() {
  toggleActivated(desktopBtn);

  root.classList.toggle("desktop");
  // root.classList.remove("tablet");
  // root.classList.remove("mobile");

  // I'm not sure if I want to bring these back later

  // tablet.addEventListener("click", function() {
  //   root.classList.toggle("tablet");
  //   root.classList.remove("desktop");
  //   root.classList.remove("mobile");
  // });

  // mobile.addEventListener("click", function() {
  //   root.classList.toggle("mobile");
  //   root.classList.remove("tablet");
  //   root.classList.remove("desktop");

  setTimeout(() => {
    desktopBtn.classList.add("animate-flicker");
    smoothScrollIntoView(desktopBtn, { behavior: "smooth", block: "center" });
  }, 500);
  setTimeout(() => {
    desktopBtn.classList.remove("animate-flicker");
  }, 3000);
}

//   // let { top } = offset(mobile);
//   // console.log(top);
//   //document.documentElement.scrollTop = document.body.scrollTop = 8000;
//   // mobile.scrollIntoView({behavior: "smooth", block: "center"});
// });

// function offset(el) {
//   var rect = el.getBoundingClientRect();
//   var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// }

// Turn on VRT grid
const vrtBtn = document.querySelector("[rel='vrt']");
vrtBtn.addEventListener("click", function() {
  toggleActivated(vrtBtn);
  runVert.belowGrid();
});

// Fix most of the spacing
const fixSpaceBtn = document.querySelector("[rel='fix-space']");
fixSpaceBtn.addEventListener("click", toggleFixSpace);
// const btns = document.querySelectorAll("button");

function toggleFixSpace() {
  toggleActivated(fixSpaceBtn);
  root.classList.toggle("fix-space");
  // for (let b of btns) {
  //   b.classList.toggle("noBorders");
  // }

  setTimeout(() => {
    fixSpaceBtn.classList.add("animate-flicker");
    smoothScrollIntoView(fixSpaceBtn, { behavior: "smooth", block: "center" });
  }, 500);
  setTimeout(() => {
    fixSpaceBtn.classList.remove("animate-flicker");
  }, 3000);
}

const scrollTopBtn = document.querySelector("[rel='scrollTop']");
const top = document.getElementById("top");
scrollTopBtn.addEventListener("click", function() {
  toggleActivated(scrollTopBtn);
  top.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Enable RDM to resize elements
const rdmBtn = document.querySelector("[rel='rdm']");
rdmBtn.addEventListener("click", function() {
  toggleActivated(rdmBtn);
  rdm("figure");
  runVert.closeGrid();
  runVert.belowGrid();
});

// On/Off button during development

// const onBtn = document.querySelector("[rel='on']");
// let onActive = false;
// onBtn.addEventListener("click", function() {
//   if (onActive === false) {
//     runAll();
//     onActive = true;
//     onBtn.textContent = "on";
//   } else {
//     killAll();
//     onActive = false;
//     onBtn.textContent = "off";
//   }
// });

// function runAll() {
//   spaceText();
//   styleHeadings();
//   showMZR();
//   toggleMargins();
//   toggleFixSpace();

//   // We gotta wait for the column to resize before
//   // we resize the image
//   setTimeout(() => {
//     rdm("figure");
//   }, 500);

//   // We need to wait for the column and image
//   // to resize before showing the grid.
//   setTimeout(() => {
//     runVert.belowGrid();
//   }, 1000);
// }

// function killAll() {
//   spaceText();
//   styleHeadings();
//   showMZR();
//   toggleMargins();
//   toggleFixSpace();
//   rdm();
//   runVert.closeGrid();
// }
