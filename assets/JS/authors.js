$(document).ready(() => {
  getAuthors()
  .then(addAuthors);
});

function getAuthors () {
  return $.get(`${API_URL}/authors`);
}

function addAuthors (authors) {
  const source = $('#authors-template').html();
  const template = Handlebars.compile(source);
  const Authors = {authors};
  const HTML = template(Authors);
  console.log(HTML);
  $('.authors-render').html(HTML);
}
