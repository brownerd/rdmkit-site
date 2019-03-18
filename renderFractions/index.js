let b1 = percisionTest("box1", 100)
let b2 = percisionTest("box2", 100.1)
let b3 = percisionTest("box3", 100.2)
let b4 = percisionTest("box4", 100.25)
let b5 = percisionTest("box5", 100.3)
let b6 = percisionTest("box6", 100.4)
let b7 = percisionTest("box7", 100.5)
let b8 = percisionTest("box8", 100.6)
let b9 = percisionTest("box9", 100.7)
let b10 = percisionTest("box10", 100.75)
let b11 = percisionTest("box11", 100.8)
let b12 = percisionTest("box12", 100.9)

console.log({b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12});


function percisionTest(elId, num) {
  let elH = getElemHeight(elId);
  let cssH = cssHeight(num)
  let compare = compareStrings(elH, cssH)
  
  return `
    Box name : ${elId}
    CSS height : ${cssH}
    Rendered height : ${elH}
    Equal: ${compare}
    `
}

function getElemHeight(str) {
  let el = document.getElementById(str);
  let style = window.getComputedStyle(el);
  let {height} = style
  return height;
}

function compareStrings(str1, str2) {
  let result = str1 === str2;
  return result;
}

function cssHeight(num) {
  let result = num + "px"
  return result;
}
