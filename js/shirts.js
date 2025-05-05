document.querySelectorAll(".favorite-icon").forEach(button => {
  const productId = parseInt(button.dataset.id);

  // Sayfa yüklenince butonun rengini ayarla
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (wishlist.some(item => item.id === productId)) {
    button.classList.add("favorited");
  }

  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    const name = card.querySelector("h3 a").innerText;
    const priceText = card.querySelector("p").innerText;
    const price = parseFloat(priceText.replace(" TL", "").replace(",", "."));
    const image = card.querySelector("img").getAttribute("src");

    const selectedProduct = {
      id: productId,
      name: name,
      price: price,
      image: image
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const index = wishlist.findIndex(item => item.id === productId);
    if (index !== -1) {
      // Zaten favoride, çıkar
      wishlist.splice(index, 1);
      button.classList.remove("favorited");
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      showMessage("Ürün favorilerden çıkarıldı.");
    } else {
      // Favoriye ekle
      wishlist.push(selectedProduct);
      button.classList.add("favorited");
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      showMessage("Ürün favorilere eklendi.");
    }
  });
});

// Tost mesaj fonksiyonu
function showMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'toast-message';
  msg.innerText = text;
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}


