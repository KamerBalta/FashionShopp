// Giriş panelini aç/kapat
document.getElementById('openLogin').addEventListener('click', function (e) {
    e.preventDefault(); // Sayfa yenilenmesin
    document.getElementById('loginSidebar').classList.add('open');
});

document.getElementById('closeLogin').addEventListener('click', function () {
    document.getElementById('loginSidebar').classList.remove('open');
});

// Form gönderme işlemi
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Giriş başarılı!');
            document.getElementById('loginSidebar').classList.remove('open');
        } else {
            alert(result.message || 'Giriş başarısız.');
        }

    } catch (error) {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
});
