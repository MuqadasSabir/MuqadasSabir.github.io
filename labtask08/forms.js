document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent default form submission
        let isValid = true;

        // Regular expressions
        const namePattern = /^[A-Za-z ]+$/;           // letters and spaces
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // simple email check
        const phonePattern = /^[0-9]{10,15}$/;        // digits only, 10-15 length
        const agePattern = /^[0-9]{1,3}$/;            // 1-3 digit numbers

        // Fields
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const age = document.getElementById("age");

        // First Name validation
        if (!namePattern.test(fname.value)) {
            fname.style.backgroundColor = "red";
            isValid = false;
        } else {
            fname.style.backgroundColor = "#f9f9f9";
        }

       
        if (!namePattern.test(lname.value)) {
            lname.style.backgroundColor = "red";
            isValid = false;
        } else {
            lname.style.backgroundColor = "#f9f9f9";
        }

       
        if (!emailPattern.test(email.value)) {
            email.style.backgroundColor = "red";
            isValid = false;
        } else {
            email.style.backgroundColor = "#f9f9f9";
        }

       
        if (!phonePattern.test(phone.value)) {
            phone.style.backgroundColor = "red";
            isValid = false;
        } else {
            phone.style.backgroundColor = "#f9f9f9";
        }

        
        if (!agePattern.test(age.value) || age.value < 1 || age.value > 120) {
            age.style.backgroundColor = "red";
            isValid = false;
        } else {
            age.style.backgroundColor = "#f9f9f9";
        }

       
        if (isValid) {
            form.submit();
        }
    });
});