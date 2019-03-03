import mzr from "rdmkit-mzr";
import cpl from "rdmkit-cpl";
import vrt from "rdmkit-vrt";
import rdm from "rdmkit-rdm";

import "prismjs";

// mzr();
cpl();
var runVert = vrt();
// rdm(".hero");

// Spacing
const spacing = document.querySelector("[rel='spacing']");
const pagraphs = document.querySelectorAll("p, ul");
spacing.addEventListener("click", spaceText);

function spaceText() {
  for (let p of pagraphs) {
    p.classList.toggle("spacing");
  }
}

// Style headings
const hierarchy = document.querySelector("[rel='hierarchy']");
const hgroups = document.querySelectorAll("hgroup");
hierarchy.addEventListener("click", styleHeadings);

function styleHeadings() {
  for (let h of hgroups) {
    h.classList.toggle("hierarchy");
  }
}

// Show MZR
const measure = document.querySelector("[rel='mzr']");
const measureP = document.querySelector("[data-mzr]");
let mzrOn = false;
measure.addEventListener("click", showMZR);

function showMZR() {
  if (mzrOn === false) {
    mzr();
    mzrOn = true;
  } else {
    measureP.textContent = `I'd say that the biggest issue right now is that the text touches both sides of the screen and that is making the paragraph text look like it's running wild on the page. We need margins. In print we need margins for giving our hands a place to hold a book without rubbing off letters. In print margins give us space to write notes. They prevent text from falling too close to where the page is bound which would make it hard to read. However, online, we simply need margins for creating pleasing line-lengths and space for all the other parts of the site that need room to breath. But how much margin do we need? And what about responsive matters? Let's say that we want a measure of ~40 characters on a mobile screen, ~80 characters on a tablet and ~100 on a desktop. I made another tool called MZR (measure) to be able to vidualize this. To make MZR work we need to add a data-attribute that looks like data-mzr="40/80/100" this to any element in our code.`;
    mzrOn = false;
  }
}

const root = document.documentElement;
const desktop = document.querySelector("[rel='desktop']");
const tablet = document.querySelector("[rel='tablet']");
const mobile = document.querySelector("[rel='mobile']");

desktop.addEventListener("click", toggleMargins);

function toggleMargins() {
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
vrtBtn.addEventListener("click", runVert.belowGrid);

// Fix most of the spacing
const fixSpace = document.querySelector("[rel='fix-space']");
fixSpace.addEventListener("click", toggleFixSpace);

function toggleFixSpace() {
  root.classList.toggle("fix-space");
}

// Enable RDM to resize elements
const rdmBtn = document.querySelector("[rel='rdm']");
rdmBtn.addEventListener("click", function() {
  rdm("figure");
  runVert.closeGrid();
  runVert.belowGrid();
});

const onBtn = document.querySelector("[rel='on']");
let onActive = false;
onBtn.addEventListener("click", function() {
  if (onActive === false) {
    runAll();
    onActive = true;
    onBtn.textContent = "on";
  } else {
    killAll();
    onActive = false;
    onBtn.textContent = "off";
  }
});

function runAll() {
  spaceText();
  styleHeadings();
  showMZR();
  toggleMargins();
  toggleFixSpace();

  // We gotta wait for the column to resize before
  // we resize the image
  setTimeout(() => {
    rdm("figure");
  }, 500);

  // We need to wait for the column and image
  // to resize before showing the grid.
  setTimeout(() => {
    runVert.belowGrid();
  }, 1000);
}

function killAll() {
  spaceText();
  styleHeadings();
  showMZR();
  toggleMargins();
  toggleFixSpace();
  rdm();
  runVert.closeGrid();
}
