let productsArr = [];
let productsInCart = [];

function product(pNmae, pCategory, pPrice, pRait, pImgPath) {
  this.pNmae = pNmae;
  this.pCategory = pCategory;
  this.pPrice = pPrice;
  this.pRait = pRait;
  this.pImgPath = pImgPath;

  productsArr.push(this);
  this.render();
}

function setLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productsInCart));
}
function getLocalStorage() {
  let local = JSON.parse(localStorage.getItem("products"));
  if (local != null) {
    productsInCart = local;
    let counter = document.getElementById("cart");
    counter.textContent = productsInCart.length;
  }
}

product.prototype.render = function () {
  let allProducts = document.getElementById("all-products");

  let productDiv = document.createElement("div");
  productDiv.className = "product";

  let productIMG = document.createElement("img");
  productIMG.className = "product-img";
  productIMG.src = this.pImgPath;
  productDiv.appendChild(productIMG);
  allProducts.appendChild(productDiv);

  let div = document.createElement("div");

  let productCategory = document.createElement("span");
  productCategory.className = "product-category";
  productCategory.textContent = this.pCategory;
  div.appendChild(productCategory);

  let productName = document.createElement("span");
  productName.className = "product-name";
  productName.textContent = this.pNmae;
  div.appendChild(productName);

  let raitingDiv = document.createElement("div");
  raitingDiv.className = "product-rating";

  let star;
  for (let i = 1; i <= 5; i++) {
    star = document.createElement("span");
    if (i <= this.pRait) {
      star.className = "fa fa-star checked";
    } else {
      star.className = "fa fa-star ";
    }
    raitingDiv.appendChild(star);
  }

  div.appendChild(raitingDiv);
  productDiv.appendChild(div);

  let elwrapper = document.createElement("div");
  elwrapper.className = "el-wrapper";
  elwrapper.setAttribute(
    "onclick",
    `addProductToCart(${productsArr.length - 1})`
  );
  let boxdown = document.createElement("div");
  boxdown.className = "box-down";
  let hbg = document.createElement("div");
  hbg.className = "h-bg";
  let hbginner = document.createElement("div");
  hbginner.className = "h-bg-inner";
  hbg.appendChild(hbginner);
  boxdown.appendChild(hbg);

  let a = document.createElement("a");
  a.className = "cart";
  a.style.cursor = "pointer";
  let priceSpan = document.createElement("span");
  priceSpan.className = "price";
  priceSpan.textContent = `${this.pPrice} RS`;
  let addtocartSpan = document.createElement("span");
  addtocartSpan.className = "add-to-cart";
  let textSpan = document.createElement("span");
  textSpan.className = "txt";
  textSpan.textContent = "Add in cart";

  a.appendChild(priceSpan);
  addtocartSpan.appendChild(textSpan);
  a.appendChild(addtocartSpan);
  boxdown.appendChild(a);
  elwrapper.appendChild(boxdown);
  productDiv.appendChild(elwrapper);
};

let p1 = new product(
  "Black Opium",
  "perfume",
  400,
  5,
  "https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2018/01/08/3213791-238141352.jpg?itok=uSvgYjdo"
);
let p2 = new product(
  "Ree ",
  "French perfume",
  1250,
  5,
  "https://cdn.atwilltech.com/flowerdatabase/f/floral-spectacular-flower-vase-VA03507.425.jpg"
);
let p3 = new product(
  "lanut De l'HOMME",
  "Men's perfume",
  1500,
  4,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZXu0GUtCgNwKvujTD9eHngqS-Q4mNcWl6vbDMFNYJvVd2XrK2GdhPZbgngDkHy68h44&usqp=CAU"
);
let p4 = new product(
  "lanut De l'HOMME",
  "Men's perfume",
  2555,
  5,
  "https://cdn.salla.sa/MPTFHOWdz4RtEQmiiR6BQwtsOBBuU6QIA83JCFif.jpeg"
);
let p5 = new product(
  "Maison Francis",
  "ًWinter perfumes",
  1500,
  4,
  "https://1.bp.blogspot.com/-q88jLd71VO8/X72J30GTTfI/AAAAAAAABCA/Nhj4eTwnRaAnWCHl2DNaU9NolZn0fjPCwCLcBGAsYHQ/w640-h640/i-023388-baccarat-rouge-540-edp-70ml-1-940-removebg-preview%2B%25281%2529.png"
);
let p6 = new product(
  "Creed Spice And Wood ",
  "ًWinter perfumes",
  1500,
  4,
  "https://1.bp.blogspot.com/-eiLFLSVv8Nw/X72KC0rZefI/AAAAAAAABCE/pafEzBkNGIwHFLSDOCmuX1mL1TIdqy1QQCLcBGAsYHQ/w640-h640/9881_img-6598-creed-les-royales-exclusives-spice-and-wood_720-removebg-preview%2B%25281%2529.png"
);

function addProductToCart(index) {
  for (let i = 0; i < productsArr.length; i++) {
    if (i == index) {
      productsInCart.push(productsArr[index]);
      break;
    }
  }
  let counter = document.getElementById("cart");
  counter.textContent = productsInCart.length;
  setLocalStorage();
}
getLocalStorage();
