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
  
  