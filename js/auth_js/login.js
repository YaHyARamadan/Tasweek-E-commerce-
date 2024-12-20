function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;

  // Optional: Add validation logic here
  if (email && password) {
      window.location.href = "../content_page/content.html"; // Redirect to the new page
  } else {
      alert('Please fill out all fields!');
  }
}
