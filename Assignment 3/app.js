var slideIndex = 0;
var time = 3000;
// carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "inline";
  setTimeout(carousel, time); // Change image every 2 seconds
}
