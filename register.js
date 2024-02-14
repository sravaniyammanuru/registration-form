function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    if (firstName.trim() === "") {
        firstNameError.textContent = "First Name is required";
        return false;
    }
    if (lastName.trim() === "") {
        lastNameError.textContent = "Last Name is required";
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid Email";
        return false;
    }
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }
    return true;
}