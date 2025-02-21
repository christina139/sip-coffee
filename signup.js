document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    const passwordError = document.getElementById('passwordError');

   
    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none'; 


        alert('Form submitted successfully!');
 
        document.getElementById('signupForm').reset();
    }
});
