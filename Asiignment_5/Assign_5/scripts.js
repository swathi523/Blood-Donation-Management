// Add an event listener to the login form to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const email = document.getElementById('email').value; // Get the value of the email input field
  const password = document.getElementById('password').value; // Get the value of the password input field

  // Call validateLogin function to check if the email and password are valid
  if (validateLogin(email, password)) {
    alert('Login successful'); // Display an alert if login is successful
  }
});

// Function to validate the login form input fields
function validateLogin(email, password) {
  // Check if either the email or password fields are empty
  if (email === '' || password === '') {
      alert('Both fields are required!'); // Alert the user if fields are empty
      return false; // Return false to indicate invalid input
  }
  return true; // Return true if both fields are filled
}
