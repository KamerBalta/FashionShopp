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

// Sayfa yüklendiğinde oturum kontrolü ve otomatik çıkış
window.addEventListener('load', () => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
      alert(`${user} olarak giriş yapılmıştı, şimdi otomatik çıkış yapılıyor.`);
      localStorage.removeItem('loggedInUser'); // Otomatik çıkış
      // İstersen burada sayfayı yenileyebilirsin veya başka bir şey gösterebilirsin
      // location.reload();
  }
});






  
  