$(document).ready(function() {
  $('.genre-form').submit(function(event) {
    event.preventDefault();
  
  let genre = $("input[name='genre']:checked").val();
  console.log(genre);

  // <input class="form-check-input" type="radio" name="genre" id="movieGenre" value="celeb1">
  // <label class="form-check-label" for="movieGenre">Sci Fi</label>

  // if (genre === "celeb1") {
  //   $('#scifi').show();
  // } else if (genre === 'celeb2') {
  //   $('#action').show();
  // } else if (genre === 'celeb3') {
  //   $('#drama').show();
  // }
  // $(".genre").text(genre);

  // <div id="scifi">
  // <p>actor name</p>
  // </div>


  if (genre === "scifi" && scene === "journey") {
    $('#scifiJourney').show();
  } else if (genre === "scifi" && scene === "fight") {
    $('#scifiFight').show();
  } else if (genre === "scifi" && scene === "romance") {
    $('#scifiRomance').show();
  }

  if (genre === "action" && scene === "journey") {
    $('#actionJourney').show();
  } else if (genre === "action" && scene === "fight") {
    $('#actionFight').show();
  } else if (genre === "action" && scene === "romance") {
    $('#actionRomance').show();
  }

  if (genre === "drama" && scene === "journey") {
    $('#dramaJourney').show();
  } else if (genre === "drama" && scene === "fight") {
    $('#dramaFight').show();
  } else if (genre === "drama" && scene === "romance") {
    $('#dramaRomance').show();
  }

  $(".genre").text(genre);
  $(".genre").text(scene);

  });
});