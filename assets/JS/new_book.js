$(document).ready(() => {

  $('form').submit((event) => {

    event.preventDefault();

    let $title = $('#title').val();
    let $genre = $('#genre').val();
    let $description = $('#description').val();
    let $cover = $('#cover_url').val();

    let data = {
      "title": $title,
      "genre": $genre,
      "description": $description,
      "cover_url": $cover
    }

    if (!valid(data)) {
      alert('invalid entry');
    } else {
      $.post(`${API_URL}/books/new`, data).then(response => {
        console.log(response);
      });
      window.location.href = '../books.html';
    }

    function valid() {
      const title = $title != '';
      const genre = $genre != '';
      const description = $description != '';
      const cover = $cover != '';

      return title && genre && description && cover;
    }

  });

});
