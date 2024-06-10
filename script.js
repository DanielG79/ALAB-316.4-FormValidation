// Part-one
// Tasks:
//  - Review Default Files: HTML & CSS
//  - Research & Utilize Appropriate HTML Attributes & JS event listeners that meet requirements

// P2. General Requirements
// Tasks:
//  - Build & Display the appropriate error message
//      - Must return:
//          - Error type
//          - Description
//          - Input element
//              - where the error originates from
//  - If requirements for fail, the form should not submit

// Registration Form Element

function ValidateRegistration() {
    const usrName = document.forms["registration"]["username"].value.trim();
    const email = document.forms["registration"]["email"].value.trim().toLowerCase();
    const password = document.forms["registration"]["password"].value;
    const passwordCheck = document.forms["registration"]["passwordCheck"].value;
    const terms = document.forms["registration"]["terms"].checked;

    clearError();

    // Registration Form - Username Validation:
    // The username cannot be blank.
    // The username must be at least four characters long.
    // The username must contain at least two unique characters.
    // The username cannot contain any special characters or whitespace.
    // Registration Form - Email Validation:
    // The email must be a valid email address.
    // The email must not be from the domain "example.com."

    if (!userName) {
        displayError("Username cannot be blank.");
        return false;
    }

    if (!isValidEmail(email)) {
        displayError("Username cannot be blank.");
        return false;
    }

    if (!isValidEmail(email)) {
        displayError("Please enter a valid email address.");
        return false;
    }

    if (email.endsWith("@example.com")) {
        displayError("Email cannot be from the domain 'example.com'.");
        return false;
    }

    // Registration Form - Password Validation:
    // Passwords must be at least 12 characters long.
    // Passwords must have at least one uppercase and one lowercase letter.
    // Passwords must contain at least one number.
    // Passwords must contain at least one special character.
    // Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
    // Passwords cannot contain the username.
    // Both passwords must match.

    if (password.length < 12) {
        displayError("Password must be at least 12 characters long.");
        return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        displayError("Password must contain at least one uppercase and one lowercase letter.");
        return false;
    }

    if (!/\d/.test(password)) {
        displayError("Password must contain at least one number.");
        return false;
    }

    if (!/[^a-zA-Z0-9\s]/.test(password)) {
        displayError("Password must contain at least one special character.");
        return false;
    }

    if (password.toLowerCase().includes("password")) {
        displayError("Password cannot contain the word 'password'.");
        return false;
    }

    if (password !== passwordCheck) {
        displayError("password do not match.");
        return false;
    }

    if (!terms) {
        displayError("You must agree to the Terms of Use.");
        return false;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = storedUsers.find(user => user.username === userName.toLowerCase());
    if (existingUser) {
        displayError("The userName is already taken.");
        return false;
    }

    const newUser = {
        userName, email, password
    };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    document.forms["registration"].reset();
    displaySuccess("Registration Successful!");

    return false;
}

function validateLogin() {
    const username = document.forms["login"]["username"].value.trim();
    const password = document.forms["login"]["password"].value;
    const persist = document.forms["login"]["persist"].checked;


    clearError();

    if (!userName) {
        displayError("Username cannot be blank.");
        return false;
    }

    if (!password) {
        displayError("Password cannot be blank.");
        return false;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(user => user.username === username.toLowerCase());
    if (!user || user.password !== password) {
        displayError("Invalid username or password.");
        return false;
    }

    document.forms["login"].reset();

    if (persist) {
        displaySuccess("Login successful. You are logged in permanently.");
    } else {
        displaySuccess("Login successful.");
    }

    return false;
}

