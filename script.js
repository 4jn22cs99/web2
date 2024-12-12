function validateForm() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let serviceType = document.getElementById('serviceType').value;

    if (fullName == "" || email == "" || phone == "" || address == "" || serviceType == "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Basic phone number validation (must be digits only and 10 characters long)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }

    return true;
}
