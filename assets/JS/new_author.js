$(document).ready(() => {

  $('form').submit((event) => {

    event.preventDefault();

    const $firstName = $('#first_name').val();
    const $lastName = $('#last_name').val();
    const $biography = $('#biography').val();
    const $portrait = $('#portrait_url').val();

    const data = {
      "first_name": $firstName,
      "last_name": $lastName,
      "biography": $biography,
      "portrait_url": $portrait
    }

    if (!valid(data)) {
      alert('invalid entry');
    } else {
      $.post(`${API_URL}/authors/new`, data)
        .then((result) => {
          console.log(result);
      });
      window.location.href = '../authors.html';
    }

    function valid() {
      const firstName = $firstName != '';
      const lastName = $lastName != '';
      const bio = $biography != '';
      const portrait = $portrait != '';

      return firstName && lastName && bio && portrait;
    }

  });

});
