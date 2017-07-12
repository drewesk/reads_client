$(document).ready(() => {
  getBooks()
  .then(addBooks);
});

function getBooks () {
  return $.get(`${API_URL}/books`);
}

function addBooks (books) {
  const source = $('#books-template').html();
  const template = Handlebars.compile(source);
  const Books = {books};
  const HTML = template(Books);
  console.log(HTML);
  $('.books-render').html(HTML);
}
