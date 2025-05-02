document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Menü açma / kapama
    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Dropdown'lar için tıklama işlemi
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
});
