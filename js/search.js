/* SEARCH */

// Arama açma
document.querySelector('[alt="Arama"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("searchOverlay").style.display = "block";
  document.getElementById("searchInput").focus();
});

// Arama kapama
document.getElementById("closeSearch").addEventListener("click", function () {
  document.getElementById("searchOverlay").style.display = "none";
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
});

// Arama alanları
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Gerçek ürünleri products.js dosyasından alıyoruz (önceden tanımlı olmalı)
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.length > 1) {
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = "<p style='padding:10px;'>Sonuç bulunamadı</p>";
    } else {
      filtered.forEach(p => {
        const a = document.createElement("a");
        
        // Detay sayfasına yönlendirme için id ile link oluştur
        a.href = `productDetail.html?id=${p.id}`;
        a.className = "product-card";

        // Fiyatı 'xxx.xx TL' formatına çevir
        const formattedPrice = p.price.toFixed(2) + " TL";

        a.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <div>
            <h4>${p.name}</h4>
            <p>${formattedPrice}</p>
          </div>
        `;
        searchResults.appendChild(a);
      });
    }
  }
});
