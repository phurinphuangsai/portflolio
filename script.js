
function toggleContact() {
    var contactInfo = document.getElementById("contact-info");
    if (contactInfo.classList.contains("hidden")) {
        contactInfo.classList.remove("hidden");
    } else {
        contactInfo.classList.add("hidden");
    }
}
