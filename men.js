const products = [
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/2e431b2550d.jpg",
    title: "Casual Shirt Half",
    price: "1895",
    ID: "1",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/5c62638d7fb.jpg",
    title: "Formal Shirt Half",
    price: "2195",
    ID: "2",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/b0dfeb2b8ec.jpg",
    title: "Slim Shirt Half",
    price: "1695",
    ID: "3",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/13c231f9648.png",
    title: "Fatua",
    price: "1995",
    ID: "4",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/2e431b2550d.jpg",
    title: "Casual Shirt Half",
    price: "1895",
    ID: "5",
  },
];

for (const product of products) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
    <div class="card h-100">
                <img src=${product.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">${product.title}</h5>
                  <p class="card-text text-center">
                  Price: ${product.price} ID: ${product.ID}
                  </p>
                  <div class="text-center">
                    <button class="btn btn-primary"  onclick="quantity()">Add to Cart</button>
                  </div>
                </div>
              </div>
  `;
  document.getElementById("parent").appendChild(div);
}

const quantity = () => {
  document.getElementById("counter").innerText =
    parseInt(document.getElementById("counter").innerText) + 1;
};
