// To validate lines we need to get each elements dom
// i put them in a constant to be able to use 

const form = document.getElementById("form");
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// showing error message from validation
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText = message;
}
// regex that checks for a valid email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// validate on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if(firstname.value === '') {
        showError(firstname, 'The Firstname is required')
    } 

    if(lastname.value === '') {
        showError(lastname, 'The Lastname is required')
    }

    if(email.value === '') {
        showError(email, 'Your email is required')
    } if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid')
    }

    if(password.value === '') {
        showError(password, 'A new password is required')
    }
   
  });