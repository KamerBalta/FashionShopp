
document.addEventListener("DOMContentLoaded", function () {
  
const wishlistContainer = document.getElementById("wishlist-container");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log(wishlist);

if (wishlist.length === 0) {
  wishlistContainer.innerHTML = "<p>Favori ürün bulunmuyor.</p>";
} else {
  wishlist.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <a href="productDetail.html?id=${product.id}">
    <img src="${product.image}" alt="${product.name}" />
  </a>
      <div>
         <h4><a href="productDetail.html?id=${product.id}">${product.name} </a></h4>
        <p>${product.price.toFixed(2)} TL</p>
      </div>
      <button class="remove-btn" data-index="${index}">×</button>
    `;

    // Favoriden çıkar
    card.querySelector(".remove-btn").addEventListener("click", () => {
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      location.reload(); // sayfayı yenile
    });

    wishlistContainer.appendChild(card);
  });
}


});