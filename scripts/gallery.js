


var imgPath = "";
var images = [];

for(var i = 1; i <= 24; i++) {
  if(i <= 20) {
    imgPath = "assets/"+i+".jpg";
  } else {
    imgPath = "assets/"+i+".png";
  }
  images.push(addImage(imgPath));
}

function leftArrow() {
  alert("Changing to left");

}

function rightArrow() {
  alert("Changing to right");
  
}
