function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    return false;
}
