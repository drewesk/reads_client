// make a request to get the specific author and
// render the info into fields

// grab the placeholder attribute and append
// validate the fields and then make a put request
// Figure out what the JS is doing to stop the CSS
// Add the submit functionality and then stop the default



$(document).ready(function() {
  const $first_name = $('#first_name');
  const $last_name = $('#last_name');
  const $biography = $('#biography');
  const $portrait = $('#portrait_url');

  $('#AuthorUpdateSearch').click((e) => {
    console.log(e);
    const $authorID = $('#searchAuthorID').val();

    $.get(`${API_URL}/authors/${$authorID}`).then((author) => {
      console.log(author);

      const $authorFirst = author.first_name;
      const $authorLast = author.last_name;
      const $authorBiography = author.biography;
      const $authorPortrait = author.portrait_url;


      $first_name.attr('value', $authorFirst);
      $last_name.attr('value', $authorLast);
      $biography.attr('value', $authorBiography);
      $portrait.attr('value', $authorPortrait);

    });
  });


  $('form').submit((event) => {

    event.preventDefault();

    const $firstBody = $('#first_name').val();
    const $lastBody = $('#last_name').val();
    const $biographyBody = $('#biography').val();
    const $portraitBody = $('#portrait_url').val();

    const $authorIDBody = $('#searchAuthorID').val();


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `${API_URL}/authors/${$authorIDBody}/edit`,
      "method": "PUT",
      "data": {
        "title": $firstBody,
        "genre": $lastBody,
        "description": $biographyBody,
        "cover_url": $portraitBody
      }
    }

    $.ajax(settings)
      .then(console.log('It did something.'));
  });
});
