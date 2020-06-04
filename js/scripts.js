$(document).ready(function() {
  $('#genre-form').submit(function(event) {
    event.preventDefault();
    
    let genre = $("input[name='genre']:checked").val();
    let scene = $("input[name='scene']:checked").val();

    $('#scifiJourney').hide();
    $('#scifiFight').hide();
    $('#scifiRomance').hide();
    $('#actionJourney').hide();
    $('#actionFight').hide();
    $('#actionRomance').hide();
    $('#dramaJourney').hide();
    $('#dramaFight').hide();
    $('#dramaRomance').hide();

    console.log(genre);
    console.log(scene);

  
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



  });
});