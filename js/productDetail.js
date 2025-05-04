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
        <button class="favorite-icon">♥</button>
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

// Tüm kalp ikonlarını seç
document.querySelectorAll('.favorite-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    // Kalbin favoride olup olmadığını kontrol et
    const isFavorited = icon.classList.toggle('favorited');

    // Rengi değiştir (favorited class'ına göre)
    icon.style.color = isFavorited ? '#e74c3c' : '#ccc';

    // Mesaj göster
    showMessage(isFavorited ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı');
  });
});

//sepete ekle kısmı
  document.querySelectorAll('.add-to-cart').forEach(icon => {
    icon.addEventListener('click', () => {
        //buraya veritabanına ürün ekleme/ çıkarma fetch isteği eklenecek
      // sepete eklenip eklenmediğini kontrol et
      const isActive = icon.classList.toggle('active');
  
      // Mesaj göster
      showMessage(isActive ? 'Sepete Eklendi' : 'Sepetten çıkarıldı');
    });
  });
  
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




