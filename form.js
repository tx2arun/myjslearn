function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var file = document.getElementById("file").files[0];

  // Display form values
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
  console.log("File: " + file.name);

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("file").value = "";
}