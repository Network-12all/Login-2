document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const errorMsg = document.getElementById("error-msg");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform AJAX request to PHP script for authentication
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        if (response === "success") {
          window.location.href = "dashboard.html";
        } else {
          errorMsg.textContent = "Invalid username or password";
        }
      }
    };
    const data = `username=${username}&password=${password}`;
    xhr.send(data);
  });
});
