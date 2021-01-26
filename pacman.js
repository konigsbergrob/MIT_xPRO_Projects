// pos is the PacMan image position variable - set to 0 initially
var pos = 0;

// pageWidth is the width of the webpage
let pageWidth = window.innerWidth;

// All PacMan images
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png'],
];

// direction defines what direction should PacMan go into
var direction = 0;

// focus determines which PacMan image should be displayed (treated as binary)
var focus = 0;

// Run is the key function used for Pacman to move across the screen
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

// checkPageBounds is used to determine Pacman's direction depending on if it 
// has reached the edge of the window, and change direction if necessary 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  let x = pos + imgWidth;
  if (x > pageWidth) {
    direction = 1;
  }
  let y = pos; 
    if (y < 0) {
      direction =0;
  }; 
  return direction;
}
// setInterval is used to call the Run function every 200 ms
setInterval(Run, 200);

// //Please do not change
// module.exports = checkPageBounds;
