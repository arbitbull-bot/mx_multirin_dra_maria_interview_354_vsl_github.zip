document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('lead-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var status = document.getElementById('form-status');
    status.hidden = false;
    status.textContent = 'Vista de demostración: los datos no se envían.';
  });
});
