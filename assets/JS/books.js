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
  // console.log(HTML);
  $('.books-render').html(HTML);
}
