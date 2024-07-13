function openNav() {
    document.getElementById("navmob").style.width = "250px";
    document.querySelector('.content').classList.add('blur');
}

function closeNav() {
    document.getElementById("navmob").style.width = "0";
    document.querySelector('.content').classList.remove('blur');
}

function openProfile() {
    document.getElementById("profilePopup").style.display = "block";
    document.querySelector('.content').classList.add('blur');
}

function closeProfile() {
    document.getElementById("profilePopup").style.display = "none";
    document.querySelector('.content').classList.remove('blur');
}

function openDevelopers() {
    document.getElementById("developersPopup").style.display = "block";
    document.querySelector('.content').classList.add('blur');
}

function closeDevelopers() {
    document.getElementById("developersPopup").style.display = "none";
    document.querySelector('.content').classList.remove('blur');
}
  // JavaScript to dynamically set the current year updating 
  document.getElementById("currentYear").textContent = new Date().getFullYear();