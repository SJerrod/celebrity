$(document).ready(function() {
  $('.genre-form').submit(function(event) {
    event.preventDefault();
  
  let genre = $("input[name='genre']:checked").val();
  console.log(genre);

  if (genre === "celeb1") {
    $('#scifi').show();
  } else if (genre === 'celeb2') {
    $('#action').show();
  } else if (genre === 'celeb3') {
    $('#drama').show();
  }
  $(".genre").text(genre);


  let scene = $("input[name='scene']:checked").val();
  console.log(scene);

  if (scene === "celeb1") {
    $('#scifi').show();
  } else if (scene === 'celeb2') {
    $('#action').show();
  } else if (scene === 'celeb3') {
    $('#drama').show();
  }
  $(".scene").text(scene);
  });
});