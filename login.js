document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

     
        const validEmail = "user@example.com";
        const validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            alert("Login successful!");
            window.location.href = "dashboard.html"; 
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    });
});
