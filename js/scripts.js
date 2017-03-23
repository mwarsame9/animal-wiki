$(document).ready(function() {
  $("img").click(function() {
    $(".description").hide();

    var thisAnimal = $(this).attr('class');
    if (thisAnimal === "bird") {
      $('#birds-info').show();
    }
    else if (thisAnimal === "turtle") {
      $('#turtle-info').show();
    }
    else {
      $('#cat-info').show();
    }
  });
});
