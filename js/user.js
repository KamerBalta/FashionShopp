// Giriş panelini aç/kapat
document.getElementById('openLogin').addEventListener('click', function (e) {
    e.preventDefault(); // Sayfa yenilenmesin
    document.getElementById('loginSidebar').classList.add('open');
});

document.getElementById('closeLogin').addEventListener('click', function () {
    document.getElementById('loginSidebar').classList.remove('open');
});

// Sahte kullanıcı verisi (backend yok, demo amaçlı)
const fakeUser = {
    email: 'kamer@outlock.com',
    password: '123456'
};

// Giriş formu gönderildiğinde çalışır
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Sayfa yeniden yüklenmesin

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sahte kullanıcı bilgileri ile eşleşme kontrolü
    if (email === fakeUser.email && password === fakeUser.password) {
        alert('Giriş başarılı!');
        localStorage.setItem('loggedInUser', email); // Oturum bilgisini kaydet
        document.getElementById('loginSidebar').classList.remove('open');
    } else {
        alert('E-posta veya şifre hatalı!');
    }
});

// Sayfa yüklendiğinde oturum kontrolü
window.addEventListener('load', () => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
        alert(`${user} olarak zaten giriş yapılmış.`);
        // İstersen burada sayfada kullanıcı adını da gösterebilirsin
    }
});



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
        a.href = p.link;
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

  
  