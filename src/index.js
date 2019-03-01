import mzr from "rdmkit-mzr";
import cpl from "rdmkit-cpl";
import vrt from "rdmkit-vrt";
import rdm from "rdmkit-rdm";

import "prismjs";

// mzr();
cpl();
vrt();
// rdm(".hero");

const spacing = document.querySelector("[rel='spacing']");
const pagraphs = document.querySelectorAll("p, ul");
spacing.addEventListener("click", function() {
  for (let p of pagraphs) {
    p.classList.toggle("spacing");
  }
});

const hierarchy = document.querySelector("[rel='hierarchy']");
const hgroups = document.querySelectorAll("hgroup");
hierarchy.addEventListener("click", function() {
  for (let h of hgroups) {
    h.classList.toggle("hierarchy");
  }
});

const measure = document.querySelector("[rel='mzr']");
const measureP = document.querySelector("[data-mzr]");
let mzrOn = false;
measure.addEventListener("click", function() {
  if (mzrOn === false) {
    mzr();
    mzrOn = true;
  } else {
    measureP.textContent = `I'd say that the biggest issue right now is that the text touches both sides of the screen and that is making the paragraph text look like it's running wild on the page. We need margins. In print we need margins for giving our hands a place to hold a book without rubbing off letters. In print margins give us space to write notes. They prevent text from falling too close to where the page is bound which would make it hard to read. However, online, we simply need margins for creating pleasing line-lengths and space for all the other parts of the site that need room to breath. But how much margin do we need? And what about responsive matters? Let's say that we want a measure of ~40 characters on a mobile screen, ~80 characters on a tablet and ~100 on a desktop. I made another tool called MZR (measure) to be able to vidualize this. To make MZR work we need to add a data-attribute that looks like data-mzr="40/80/100" this to any element in our code.`;
    mzrOn = false;
  }
});

const root = document.documentElement;
const desktop = document.querySelector("[rel='desktop']");
const tablet = document.querySelector("[rel='tablet']");
const mobile = document.querySelector("[rel='mobile']");

desktop.addEventListener("click", function() {
  root.classList.toggle("desktop");
  root.classList.remove("tablet");
  root.classList.remove("mobile");
});

tablet.addEventListener("click", function() {
  root.classList.toggle("tablet");
  root.classList.remove("desktop");
  root.classList.remove("mobile");
});

mobile.addEventListener("click", function() {
  root.classList.toggle("mobile");
  root.classList.remove("tablet");
  root.classList.remove("desktop");
});

// const vrtBtn = document.querySelector("[rel='vrt']");
// let vrtOn = false;
// vrtBtn.addEventListener("click", function() {
//   if (vrtOn === false) {
//     vrt.toggleVrtGrid({ key: "comma" });
//     vrt.toggleVrtGrid({ key: "comma" });

//     vrtOn = true;
//   } else {
//     vrt.toggleVrtGrid({ key: "period" });
//     vrtOn = false;
//   }
// });
