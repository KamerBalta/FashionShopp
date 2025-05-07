document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Menü açma / kapama (Hamburger menü)
    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Dropdown'lar için tıklama işlemi (Mobilde çalışacak)
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");

        link.addEventListener("click", (e) => {
            // Sadece mobilde çalışacak
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Linkin işlevini durdur

                // Eğer menü zaten açıksa, kapat
                const isOpen = dropdown.classList.contains("open");

                // Tüm dropdown'lardan 'open' class'ını kaldır
                dropdowns.forEach(d => d.classList.remove("open"));

                // Eğer menü kapalıysa, aç
                if (!isOpen) {
                    dropdown.classList.add("open");
                }
            }
        });
    });

    // Profil ikonuna tıklanarak profil dropdown menüsünü açma / kapama
    const profileIcon = document.getElementById("profileIcon");
    const profileDropdown = document.getElementById("profileDropdown");

    profileIcon.addEventListener("click", function (e) {
        e.stopPropagation(); // Bu tıklamanın, sayfa dışı tıklama işlevini engellemesini sağlar.
        profileDropdown.style.display = (profileDropdown.style.display === "block") ? "none" : "block";
    });

    // Sayfanın başka bir yerine tıklanınca profil dropdown'ını kapatma
    document.body.addEventListener("click", function () {
        profileDropdown.style.display = "none";
    });

    // Profil menüsünde dropdown dışında bir yere tıklanırsa dropdown kapanmasın
    profileDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
