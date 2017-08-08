var imgPath = "";
var images = [];
var galleryImageId = 0;

for(var i = 1; i <= 10; i++) {
  if(i <= 20) {
    imgPath = "assets/"+i+".jpg";
    images.push(addImage(imgPath));
  } else {
  //   imgPath = "assets/"+i+".png";
  // images.push(addImage(imgPath));
  }
}

function leftArrow() {
  if(galleryImageId > 0) {
    galleryImageId--;
  }
  modalImg.src = images[galleryImageId];
}

function rightArrow() {
  if(galleryImageId < images.length-1) {
    galleryImageId++;
  }
  modalImg.src = images[galleryImageId];
}
