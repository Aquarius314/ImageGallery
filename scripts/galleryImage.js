var imagePath = "";
var modal = null;
var modalImg = null;
var clickedId = 0;

function addImage(imgPath) {

  imagePath = imgPath;

  // add icon image
  var img = document.createElement('img');
  img.className = 'icon';
  img.src = imgPath;
  img.width = 200;
  img.height = 200;
  img.alt = imgPath;
  // attach img to body
  document.body.appendChild(img);

  // get the modal
  modal = document.getElementById('modal');
  var span = document.getElementById('close');
  modalImg = document.getElementById('modalImg');
  var captionText = document.getElementById('caption');

  img.onclick = function(e) {
    modal.style.display = "block";
    modalImg.src = this.src;
    imagePath = this.src;
    captionText.innerHTML = this.alt;
    e.stopPropagation();
    window.onclick = closeImg;
    clickedId = this.src;
  }

  function closeImg() {
    modal.style.display = "none";
    window.onclick = function(){}
  }

  span.onclick = closeImg;

  return imgPath;
}
