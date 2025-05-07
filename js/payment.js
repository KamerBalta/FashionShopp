document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun normal şekilde gönderilmesini engelle

  // Ödeme işlemi simülasyonu (gerçek ödeme yapılmaz)
  setTimeout(function() {
    showToast("Ödeme Tamamlandı!");
  }, 500);

  event.target.reset();
});

document.getElementById("addressForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Adres kayıt işlemi simülasyonu
  setTimeout(function() {
    showToast("Adres başarıyla kaydedildi!");
  }, 500);

  event.target.reset();
});

// TEK BİR showToast FONKSİYONU
function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerText = message; // Mesajı dinamik olarak ayarla
  toast.style.display = "block";
  setTimeout(function() {
    toast.style.display = "none";
  }, 3000);
}

// KART NUMARASI SADECE RAKAMLARI VE 16 HANEYİ DESTEKLER
function validateCardNumber() {
  var cardNumberInput = document.getElementById("card-number");
  var cardNumber = cardNumberInput.value.replace(/\D/g, '');

  if (cardNumber.length > 16) {
    cardNumber = cardNumber.substring(0, 16);
  }

  cardNumberInput.value = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
}

// AA/YY FORMATINDA SON KULLANMA TARİHİ
function validateExpiry() {
  var expiryInput = document.getElementById("expiry");
  var expiry = expiryInput.value.replace(/\D/g, '');

  if (expiry.length > 4) {
    expiry = expiry.substring(0, 4);
  }

  expiryInput.value = expiry.replace(/(\d{2})(?=\d)/g, '$1/');
}
