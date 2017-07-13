// make a request to get the specific book and
// render the info into fields

// grab the placeholder attribute and append
// validate the fields and then make a put request
// Figure out what the JS is doing to stop the CSS
// Add the submit functionality and then stop the default



$(document).ready(function() {
  const $title = $('#title');
  const $genre = $('#genre');
  const $description = $('#description');
  const $cover = $('#cover_url');

  $('#bookUpdateSearch').click(() => {
    const $bookID = $('#searchBookID').val();

    $.get(`${API_URL}/books/${$bookID}`).then((book) => {

      const $bookTitle = book.title;
      const $bookGenre = book.genre;
      const $bookDescription = book.description;
      const $bookCover = book.cover_url;


      $title.attr('value', $bookTitle);
      $genre.attr('value', $bookGenre);
      $description.attr('value', $bookDescription);
      $cover.attr('value', $bookCover);

    });
  });

  $('form').submit((event) => {

    event.preventDefault();

    const $titleBody = $('#title').val();
    const $genreBody = $('#genre').val();
    const $descriptionBody = $('#description').val();
    const $coverBody = $('#cover_url').val();

    const $bookIDBody = $('#searchBookID').val();


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `${API_URL}/books/${$bookIDBody}/edit`,
      "method": "PUT",
      "data": {
        "title": $titleBody,
        "genre": $genreBody,
        "description": $descriptionBody,
        "cover_url": $coverBody
      }
    }

    $.ajax(settings)
      .then(console.log('It did something.'));
  });
});
