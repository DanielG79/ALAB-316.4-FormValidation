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
    const usrName =document.forms["registration"]["username"].value.trim();
    const email = document.forms["registration"]["email"].value.trim().toLowerCase();
    const password = document.forms["registration"]["password"].value;
    const passwordCheck = document.forms["registration"]["passwordCheck"].value;
    const terms = document.forms["registration"]["terms"].checked;

    clearError();

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
        displayError ("password do not match.");
        return false;
    }
    
    if (!terms) {
        displayError("You must agree to the Terms of Use.");
        return false;
    }
}