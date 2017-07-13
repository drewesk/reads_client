$(document).ready(() => {
  getBooks()
  .then(addBooks)
  .then(() => {

    $('.removebtn').click(function () {
      const ID = $(this).data().id;
      $.ajax({
        "url": `${API_URL}/books/${ID}/delete`,
        "method": "DELETE"
      }).then(() => {
        $(`.wrap-${ID}`).remove();
        console.log('deleted');
      });
    });

    $('#bookSearch').click(() => {

      let queryValue = $('#bookID').val();
      location.search = 'id=' + queryValue;
      console.log(queryString);
    });

    if(queryString) {
      $('#booksRender').empty();

      $.get(`${API_URL}/books/${queryString}`)
        .then(addBook);
    }

  });
});

function getBooks () {
  return $.get(`${API_URL}/books`);
}

function addBooks (books) {
  const source = $('#books-template').html();
  const template = Handlebars.compile(source);
  const Books = {books};
  const HTML = template(Books);
  $('.books-render').html(HTML);
}

function addBook (book) {
  const oneSource = $('#books-template').html();
  const onetemplate = Handlebars.compile(oneSource);
  const oneBook = {books: [book]};
  const oneHTML = onetemplate(oneBook);
  $('.books-render').html(oneHTML);
}
