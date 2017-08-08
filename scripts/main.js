document.addEventListener("keydown", keyDown, false);

function keyDown(e) {
  switch(e.keyCode) {
    case 37:
      leftArrow();
      break;
    case 39:
      rightArrow();
      break;
    default:
      // alert("Key pressed: " + e.keyCode);
      break;
  }
}
