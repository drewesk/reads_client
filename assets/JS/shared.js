$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = (window.location.hostname == "localhost") ? `http://localhost:3000`: `https://reads-server.herokuapp.com`;

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
