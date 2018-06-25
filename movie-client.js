$(document).ready(function() {
  var movieName = "Jaws";
  var url = "http://www.omdbapi.com/?s=" + movieName + "&type=movie&y=&apikey=trilogy";

  $.ajax(url).then(function(response) {
    for (var i = 0; i < response.Search.length; i++) {
      var movie = $("<li>");
      movie.text(response.Search[i].Title);
      $("#movie-list").append(movie);
    }
  });
});