var ck_name = /^[A-Za-z0-9]{3,20}$/;
var ck_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var ck_phone = /^[0-9]{10}$/;

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
    validate();
});

function validate() {
    var name = document.form.name.value;
    var email = document.form.email.value;
    var password = document.form.password.value;
    var phone = document.form.phoneNumber.value;
    var gender = document.form.gender.value;
    var language = document.form.language.value;
    var course = document.form.course.value;
    var about = document.form.about.value;
    var date = document.form.date.value;
    var tnc = document.getElementById('tnc');

    var errors = [];

    if (!ck_name.test(name)) {
        errors[errors.length] = "Enter Your valid Name .";
    }

    if (!ck_email.test(email)) {
        errors[errors.length] = "You must enter a valid email address.";
    }
    if (!ck_password.test(password)) {
        errors[errors.length] = "You must enter a valid Password min 6 char.";
    }
    if (!ck_phone.test(phone)) {
        errors[errors.length] = "Enter 10 digit Phone no without +91";
    }
    if (gender == 0) {
        errors[errors.length] = "Select Gender";
    }
    if (language == 0) {
        errors[errors.length] = "Select language";
    }
    if (course == 0) {
        errors[errors.length] = "Select courses";
    }
    if (about == 0) {
        errors[errors.length] = "Please fill about yourself";
    }
    if (date == 0) {
        errors[errors.length] = "Select date";
    }

    if (!tnc.checked) {
        errors[errors.length] = "Please accept out Terms and Conditions";
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }

    let message = "Your name : " + name;
    message += " <br>Your email : " + email;
    message += "<br> Your phone number : " + phone;
    message += "<br> Your gender : " + gender;
    message += "<br> You know  : " + language;
    message += "<br> You know : " + course;
    message += "<br> About you : " + about;
    message += "<br> Your Date of birth : " + date;
    document.getElementById("message").innerHTML = message;
    return true;
}

function reportErrors(errors) {
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}