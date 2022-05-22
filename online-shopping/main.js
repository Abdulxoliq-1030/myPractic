const logo = document.querySelector("#logo");
const myCartBtn = document.querySelector("#myCart");
const shoppingZone = document.querySelector(".shopping-zone");
const cards = document.querySelectorAll(".cards .card");
const shoppingBtn = document.querySelectorAll(".shopping-btn");
const productName = document.querySelectorAll(".card-title .name");
const productPrice = document.querySelectorAll(".card-title .price");
// About Products
const aboutProducts = document.querySelector(".about-products");
const aboutSection = document.querySelector(".about-section");
const aboutSectionProductModel = document.querySelector(".about-products h1");
const aboutSectionProductName = document.querySelector("#product-name");
const aboutSectionProductPrice = document.querySelector("#product-price");
const aboutSectionProductImage = document.querySelector(".about img");
const backToSite = document.querySelector(".back");
const inCart = document.querySelector(".inCart");
// YOUR CART
const yourCart = document.querySelector(".your-cart");
const tableProducts = document.querySelector(".my-products");

logo.addEventListener("click", (e) => {
  e.preventDefault();
  yourCart.classList.add("hide");
  shoppingZone.classList.remove("hide");
});

function productsShowAbout() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      shoppingZone.classList.add("hide");
      aboutProducts.classList.remove("hide");
      aboutSectionProductModel.innerText = productName[i].innerText;
      aboutSectionProductName.innerText = `Model: ${productName[i].innerText}`;
      aboutSectionProductPrice.innerText = `Price: ${productPrice[i].innerText}`;
      aboutSectionProductImage.src = `./images/product-${i}.png`;
    });
    backToSite.addEventListener("click", () => {
      aboutProducts.classList.add("hide");
      yourCart.classList.add("hide");
      shoppingZone.classList.remove("hide");
    });
  }
}

productsShowAbout();

function createTableProducts() {
  for (let i = 0; i < shoppingBtn.length; i++) {
    shoppingBtn[i].addEventListener("click", () => {
      shoppingZone.classList.add("hide");
      aboutSection.classList.add("hide");
      yourCart.classList.remove("hide");

      const product = document.createElement("tr");
      const productImg = document.createElement("th");
      const img = document.createElement("img");

      img.src = `./images/product-${i}.png`;
      productImg.appendChild(img);
      product.appendChild(productImg);

      const name = document.createElement("th");
      name.innerText = productName[i].innerText;
      product.appendChild(name);

      const price = document.createElement("th");
      price.innerText = productPrice[i].innerText;
      product.appendChild(price);

      const removeProduct = document.createElement("th");
      removeProduct.innerHTML = `<i class="fas fa-trash"></i>`;
      removeProduct.setAttribute("class", "trash");
      product.appendChild(removeProduct);
      tableProducts.appendChild(product);
      removeProduct.addEventListener("click", () => {
        product.innerText = "";
      });

      const countProduct = document.createElement("th");
      const counter = document.createElement("span");
      let num = 1;
      const prev = document.createElement("button");
      prev.style.padding = "0.5rem";
      prev.style.fontSize = "1.2rem";
      prev.innerText = "-";
      countProduct.appendChild(prev);
      prev.addEventListener("click", () => {
        if (num === 1) {
          tableProducts.innerText = "";
          let emptyElement = document.createElement("h1");
          emptyElement.innerText = "YOUR CART IS CURRENTLY EMPTY";
          tableProducts.appendChild(emptyElement);
        } else {
          counter.innerText = --num;
        }
      });
      product.appendChild(countProduct);

      counter.style.padding = "0.5rem";
      counter.style.fontSize = "1.2rem";
      counter.innerText = num;
      countProduct.appendChild(counter);
      product.appendChild(countProduct);

      const next = document.createElement("button");
      next.style.padding = "0.5rem";
      next.style.fontSize = "1.2rem";
      next.innerText = "+";
      countProduct.appendChild(next);
      next.addEventListener("click", () => (counter.innerText = ++num));
      product.appendChild(countProduct);

      tableProducts.appendChild(product);
    });
  }
}
createTableProducts();
