let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
let container = document.getElementById("container");
let search = document.getElementById("search");

async function fetchingApi() {
  let userData = await fetch(url);
  let response = await userData.json();
  let display = "";
  response.categories.forEach((category) => {
    category.category_products.forEach((product) => {
      display += `<div key =${product.id} class="card">
                    <h1 class="title">${product.title}</h1>
                    <img src=${product.image} alt="img" class="image">
                    <p class="price">Price: Rs. ${product.price}</p>
                    <p class="vendor">Vendor: ${product.vendor}</p>
                    <p class="special">Special: ${product.badge_text}</p>
                    <p class="compare">Compare at: Rs. ${product.compare_at_price}</p>
                    <img src=${product.second_image} class="imagetwo" alt="image not available">
                  </div>`;
    });
  });
  document.getElementById("container").innerHTML = display;
}
fetchingApi();

search.addEventListener("input", function () {
  let searchValue = search.value.toLowerCase();
  let cards = container.getElementsByClassName("card");
  Array.from(cards).forEach((card)=> {
    let title = card.getElementsByClassName("title")[0].innerText.toLowerCase();
    let vendor = card
      .getElementsByClassName("vendor")[0]
      .innerText.toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else if (vendor.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function switchView() {
  container.classList.toggle("grid-view");
  container.classList.toggle("list-view");
}
