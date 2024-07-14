// Open and close navigation for mobile
function openNav() {
    document.getElementById("navmob").style.width = "250px";
    document.querySelector('.content').classList.add('blur');
}

function closeNav() {
    document.getElementById("navmob").style.width = "0";
    document.querySelector('.content').classList.remove('blur');
}

// Open and close profile popup
function openProfile() {
    document.getElementById("profilePopup").style.display = "block";
    document.querySelector('.content').classList.add('blur');
}

function closeProfile() {
    document.getElementById("profilePopup").style.display = "none";
    document.querySelector('.content').classList.remove('blur');
}

// Open and close developers popup
function openDevelopers() {
    document.getElementById("developersPopup").style.display = "block";
    document.querySelector('.content').classList.add('blur');
}

function closeDevelopers() {
    document.getElementById("developersPopup").style.display = "none";
    document.querySelector('.content').classList.remove('blur');
}

// Set the current year in the footer
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});s
