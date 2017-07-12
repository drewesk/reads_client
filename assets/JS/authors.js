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
