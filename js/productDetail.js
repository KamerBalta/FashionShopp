const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const selectedProduct = products.find(product => product.id === productId);

const detailsDiv = document.getElementById("product-details");

if (selectedProduct) {
  const sizeOptions = selectedProduct.size.map(size => `<option value="${size}">${size}</option>`).join('');

  detailsDiv.innerHTML =  `
    <div class="product-container">
      <div class="product-image">
        <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
        <button class="favorite-icon" data-id="${selectedProduct.id}">♥</button>
      </div>
      <div class="product-info">
        <h2 class="product-title">${selectedProduct.name}</h2>
        <p class="product-description">${selectedProduct.description || "Ürün açıklaması yakında eklenecek."}</p>
        <p class="product-price"><strong></strong> ${selectedProduct.price.toFixed(2)}₺</p> 
        <label for="size-select">Beden Seç:</label>
        <select id="size-select" class="size-select">
          ${sizeOptions}
        </select>

        <button class="add-to-cart">Sepete Ekle</button>
      </div>
    </div>
  `;
} else {
  detailsDiv.innerHTML = `<p>Ürün bulunamadı.</p>`;
}

// Favorilere ekleme ve çıkarma işlevi
const favoriteButton = document.querySelector(".favorite-icon");


if (favoriteButton) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Favorilerde mi? Kontrol et
  if (wishlist.some(item => item.id === selectedProduct.id)) {
    favoriteButton.classList.add("favorited");
  }

  // Favorilere ekle/çıkar butonu
  favoriteButton.addEventListener("click", () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlist.findIndex(item => item.id === selectedProduct.id);

    if (index !== -1) {
      wishlist.splice(index, 1);
      favoriteButton.classList.remove("favorited");
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      showMessage("Ürün favorilerden çıkarıldı.");
    } else {
      wishlist.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image
      });
      favoriteButton.classList.add("favorited");
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      showMessage("Ürün favorilere eklendi.");
    }
  });
}


// Sepete Ekle butonu işlevi (Güncellendi)
document.querySelector('.add-to-cart').addEventListener('click', () => {
  const selectedSize = document.getElementById("size-select").value;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.some(p => p.id === selectedProduct.id && p.size === selectedSize);

  if (!exists) {
    const productToAdd = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size: selectedSize
    };
    cart.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));
    showMessage("Sepete eklendi.");
  } else {
    showMessage("Bu ürün ve beden zaten sepette.");
  }
});



// Sepete ürün ekle
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Aynı ürün+aynı beden eklenmişse tekrar ekleme
  if (!cart.some(p => p.id === product.id && p.size === product.size)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}



// Mesaj kutusu oluştur ve ekrana yerleştir
function showMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'toast-message';
  msg.innerText = text;
  document.body.appendChild(msg);

  // 2 saniye sonra otomatik sil
  setTimeout(() => {
    msg.remove();
  }, 2000);
}





