function animateRight() {
  $("#shark-icon").animate({ marginRight: "300"}, 1000, animateLeft);
}
function animateLeft() {
  $("#shark-icon").animate({ marginRight: "0"}, 1000, animateRight);
}

$(document).ready(function() {
  animateRight();
});
