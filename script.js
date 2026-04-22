function validateContactForm() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

function bookAppointment() {
    let name = document.querySelector("input[type='text']").value;
    let date = document.querySelector("input[type='date']").value;

    if (name === "" || date === "") {
        alert("Please complete all booking details!");
        return false;
    }

    alert("Appointment booked successfully!");
    return true;
}

function submitFeedback() {
    let comment = document.querySelector("textarea").value;

    if (comment === "") {
        alert("Please enter your feedback!");
        return false;
    }

    alert("Thank you for your feedback!");
    return true;
}



function addToCart() {
    alert("Item added to cart!");
}