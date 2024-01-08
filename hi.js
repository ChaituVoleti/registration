function validateForm() {
  var name = document.getElementById('name').value;
  var mobile = document.getElementById('mobile').value;
  var email = document.getElementById('email').value;

  if (name.trim() == '' || mobile.trim() == '' || email.trim() == '') {
    alert('All fields must be filled out');
    return false;
  }

  // You can add more specific validation here, e.g., for the phone and email formats.

  return true;
}

function validateName() {
  var nameInput = document.getElementById('name');
  var nameError = document.getElementById('nameError');

  // Check if the entered text is a number
  if (!isNaN(nameInput.value)) {
    nameError.textContent = 'Name should not be a number.';
  } else {
    nameError.textContent = '';
  }
}