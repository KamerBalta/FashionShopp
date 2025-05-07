const cartContainer = document.getElementById("cart-container");
const totalPriceDiv = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Sepetiniz boş.</p>";
  totalPriceDiv.innerText = "";
} else {
  let total = 0;
  
  // Sepet kartlarını oluştur
  cart.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <a href="productDetail.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}" style="width:100px; height:auto;">
      </a>
      <div>
        <h4><a href="productDetail.html?id=${product.id}">${product.name} </a></h4>
        <p>${product.price.toFixed(2)} TL</p>
        <p>Beden: ${product.size}</p>
        <p>Adet: 
            <button class="decrease-btn">-</button>
            <span class="quantity">${product.quantity || 1}</span> 
            <button class="increase-btn">+</button>
         </p>
      </div>
      <button class="remove-btn" data-index="${index}">X</button> <!-- Silme Butonu -->
    `;


    const increaseBtn = card.querySelector(".increase-btn");
    const decreaseBtn = card.querySelector(".decrease-btn");
    const quantitySpan = card.querySelector(".quantity");

    // Arttırma butonu
    increaseBtn.addEventListener("click", () => {
    product.quantity = (product.quantity || 1) + 1;
    cart[index] = product;
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    });

    // Azaltma butonu
    decreaseBtn.addEventListener("click", () => {
    product.quantity = (product.quantity || 1) - 1;

    if (product.quantity < 1) {
        cart.splice(index, 1); // Sepetten çıkar
    } else {
        cart[index] = product; // Güncelle
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    });


    // Silme butonuna tıklanınca ürün çıkarılacak
    const removeBtn = card.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);  // Ürünü sepetten çıkar
      localStorage.setItem("cart", JSON.stringify(cart));  // localStorage'ı güncelle
      window.location.reload();  // Sayfayı yeniden yükle
    });

    total += product.price *(product.quantity || 1);
    cartContainer.appendChild(card);
  });
  

  // Toplam tutarı hesapla ve göster
  totalPriceDiv.innerHTML = `<h3>Toplam Tutar: ${total.toFixed(2)} TL</h3>`;
}
// Siparişi Tamamla Butonu
if (cart.length !== 0) {

  const completeOrderBtn = document.createElement("button");
  completeOrderBtn.textContent = "Siparişi Tamamla";
  completeOrderBtn.className = "complete-order-btn";

  completeOrderBtn.addEventListener("click", () => {
    showMessage("Ödeme sayfasına yönlendiriliyorsunuz...");
    
    // 2 saniye sonra yönlendirme
    setTimeout(() => {
      window.location.href = "payment.html"; // Burada 'odeme.html' senin ödeme sayfanın adı olmalı
    }, 2000);
  });

  totalPriceDiv.appendChild(completeOrderBtn);
}


// Toast mesajı (varsa tekrar yazmana gerek yok)
function showMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'toast-message';
  msg.innerText = text;
  document.body.appendChild(msg);
  setTimeout(() => {
    msg.remove();
  }, 2000);
}



