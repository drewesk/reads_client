$(document).ready(() => {
  getAuthors()
  .then(addAuthors)
  .then(() => {

    $('.removebtn').click(function () {
      const ID = $(this).data().id;
      $.ajax({
        "url": `${API_URL}/authors/${ID}/delete`,
        "method": "DELETE"
    	}).then(() => {
        $(`.wrap-${ID}`).remove();
        console.log('deleted');
    	});
    });

    $('#authorSearch').click(() => {

      let queryValue = $('#authorID').val();
      location.search = 'id=' + queryValue;
      console.log(queryString);
    });

    if(queryString) {
      $('#authorsRender').empty();

      $.get(`${API_URL}/authors/${queryString}`)
        .then(addAuthor);
    }

  });
});

function getAuthors () {
  return $.get(`${API_URL}/authors`);
}

function addAuthors (authors) {
  const source = $('#authors-template').html();
  const template = Handlebars.compile(source);
  const Authors = {authors};
  const HTML = template(Authors);
  // console.log(HTML);
  $('.authors-render').html(HTML);
}

function addAuthor (author) {
  const oneSource = $('#authors-template').html();
  const onetemplate = Handlebars.compile(oneSource);
  const oneAuthor = {authors: [author]};
  const authorHTML = onetemplate(oneAuthor);
  console.log(oneSource, oneAuthor, authorHTML)
  $('.authors-render').html(authorHTML);
}
