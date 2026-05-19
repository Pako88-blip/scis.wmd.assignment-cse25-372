/* CONTACT FORM */
function validateContactForm() {

    let name = document.querySelector("#contactName").value.trim();
    let email = document.querySelector("#contactEmail").value.trim();
    let message = document.querySelector("#contactMessage").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all contact fields!");
        return false;

    }

    alert("Message sent successfully!");
    return true;
}


/* BOOKING FORM */
function bookAppointment() {

    let name = document.querySelector("#bookName").value.trim();
    let animal = document.querySelector("#animalType").value;
    let date = document.querySelector("#appointmentDate").value;

    if (name === "" || animal === "" || date === "") {

        alert("Please complete all booking details!");
        return false;

    }

    alert("Appointment booked successfully!");
    return true;
}


/* FEEDBACK FORM */
function submitFeedback() {

    let name = document.querySelector("#feedbackName").value.trim();
    let comment = document.querySelector("#feedbackComment").value.trim();

    if (name === "" || comment === "") {

        alert("Please enter your feedback!");
        return false;

    }

    alert("Thank you for your feedback!");
    return true;
}


/* SHOP PAGE */
function addToCart(productName) {

    alert(productName + " added to cart!");

}