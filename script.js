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
    const usrname =document.forms["registration"]["username"].value.trim();
    const email = document.forms["registration"]["email"].value.trim().toLowerCase();
    const password = document.forms["registration"]["password"].value;
    const passwordCheck = document.forms["registration"]["passwordCheck"].value;
    const terms = document.forms["registration"]["terms"].checked;

    clearError();
    
}