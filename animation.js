function animateRight() {
  $("#shark-icon").animate({ marginLeft: "500"}, 1000, animateLeft);
}
function animateLeft() {
  $("#shark-icon").animate({ marginLeft: "0"}, 1000, animateRight);
}

$(document).ready(function() {
  animateRight();
});
