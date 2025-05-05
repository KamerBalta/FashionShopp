function showPopup(event) {
  event.preventDefault(); // Sayfanın yenilenmesini engelle
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
