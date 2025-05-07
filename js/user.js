let isLoggedIn = false; // Giriş durumu kontrolü

// Sayfa yüklenince
window.addEventListener('load', () => {
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    const defaultUser = { email: 'kamer@outlook.com', password: '123456' };
    const exists = userList.some(u => u.email === defaultUser.email);
    if (!exists) {
        userList.push(defaultUser);
        localStorage.setItem('userList', JSON.stringify(userList));
    }

    const user = localStorage.getItem('loggedInUser');
    if (user) {
        isLoggedIn = true;
        document.getElementById('dropdownName').textContent = user;
        document.getElementById('userDropdown').style.display = 'none';
    }
});

// Kullanıcı ikonuna tıklama
document.getElementById('openLogin').addEventListener('click', function (e) {
    e.preventDefault();
    if (isLoggedIn) {
        // Dropdown aç/kapat
        const dropdown = document.getElementById('userDropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    } else {
        // Side bar aç
        document.getElementById('registerSidebar').classList.remove('open');
        document.getElementById('loginSidebar').classList.add('open');
    }
});

// Giriş panelini kapat
document.getElementById('closeLogin').addEventListener('click', function () {
    document.getElementById('loginSidebar').classList.remove('open');
});

// Kayıt paneli aç
document.getElementById('openRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginSidebar').classList.remove('open');
    document.getElementById('registerSidebar').classList.add('open');
});

// Kayıt panelini kapat
document.getElementById('closeRegister').addEventListener('click', function () {
    document.getElementById('registerSidebar').classList.remove('open');
});

// Kayıttan girişe geçiş
document.getElementById('openLoginFromRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerSidebar').classList.remove('open');
    document.getElementById('loginSidebar').classList.add('open');
});

// Giriş işlemi
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    const foundUser = userList.find(u => u.email === email && u.password === password);

    if (foundUser) {
        showToast('Giriş başarılı!');
        localStorage.setItem('loggedInUser', email);
        document.getElementById('loginForm').reset();
        setTimeout(() => {
            document.getElementById('loginSidebar').classList.remove('open');
        }, 1500);

        isLoggedIn = true;
        document.getElementById('dropdownName').textContent = email;
    } else {
        showToast('E-posta veya şifre hatalı!');
    }
});

// Kayıt işlemi
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('newName').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    let userList = JSON.parse(localStorage.getItem('userList')) || [];
    const exists = userList.some(u => u.email === email);

    if (exists) {
        showToast("Bu e-posta ile zaten kayıt olunmuş!");
        return;
    }

    userList.push({ name, email, password });
    localStorage.setItem('userList', JSON.stringify(userList));
    showToast("Kayıt başarılı!");
    document.getElementById('registerForm').reset();
    setTimeout(() => {
        document.getElementById('registerSidebar').classList.remove('open');
    }, 1500);
});

// Çıkış işlemi
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    isLoggedIn = false;
    document.getElementById("userDropdown").style.display = "none";
    showToast("Çıkış yapıldı.");
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';       // görünür hale getir
    toast.style.opacity = '1';           // şeffaflık kaldır
    toast.style.visibility = 'visible';  // gizliliği kaldır

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.visibility = 'hidden';
        toast.style.display = 'none';   // geri kapat
    }, 3000);
}