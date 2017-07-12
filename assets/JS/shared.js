$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = 'https://reads-server.herokuapp.com';

/////////////////////////////////////////////

// const addAuthors = addEntity(getAuthors(), '#authors-template', '.authors-render');
// const addBooks = addEntity(getBooks(), '#books-template', '.books-render');
//
// const getAuthors = getEntity('authors');
// const getBooks = getEntity('books');
// function declarations


// function ifLocalhost() {
//   // let localHost = window.location.host.indexOf('localhost') != -1;
//     return ; //Ask CJ for a better refactor
// }
/////////////////////////////////////////////

function getAuthors () {
  return $.get(`${API_URL}/authors`);
}

function getBooks () {
  return $.get(`${API_URL}/books`);
}

function addAuthors (authors) {
  const source = $('#authors-template').html();
  const template = Handlebars.compile(source);
  const Authors = {authors};
  const HTML = template(Authors);
  console.log(HTML);
  $('.authors-render').html(HTML);
}

function addBooks (books) {
  const source = $('#books-template').html();
  const template = Handlebars.compile(source);
  const Books = {books};
  const HTML = template(Books);
  console.log(HTML);
  $('.books-render').html(HTML);
}

/////////////////////////////////////////////

// function getEntity(path) {
//   return $.get(`${API_URL}/${path}`);
// }
//
// function addEntity (entity, id, element) {
//   const source = $(id).html();
//   const template = Handlebars.compile(source);
//   const Entity = {entity};
//   const entHTML = template(Entity);
//   console.log(entHTML);
//   $(element).html(entHTML);
// }
/////////////////////////////////////////////
