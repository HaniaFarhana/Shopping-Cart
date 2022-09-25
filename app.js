const products = [
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/2b45a4470.jpg",
    title: "Stylish Long Tops for Women",
    price: "1559",
    id: "1",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/89d66a73a.jpg",
    title: "Stylish Long Tops for Women",
    price: "1400",
    id: "2",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/8f2957301.jpg",
    title: "Stylish Long Tops for Women",
    price: "2000",
    id: "3",
  },
  {
    img: "https://www.gentlepark.com/sbp-admin/upload/513b42a7b.jpg",
    title: "Stylish Long Tops for Women",
    price: "1560",
    id: "4",
  },
];
products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
    <div class="card h-100">
                <img
                  src=${product.img}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text text-center">Price:Tk.${product.price}  ID:  ${product.id}</p>
                  
                  <div class="text-center"><button onclick="cartAdd('${product.id}')" class="btn btn-primary">Add to cart</button></div>

                </div>
              </div>
  `;
  document.getElementById("cards-continer").appendChild(div);
});

const cartProducts = [];
function cartAdd(id) {
  let flag;
  cartProducts.forEach((item) => {
    if (item.id === id) {
      flag = true;
      item.quantity += 1;
    }
  });
  if (flag) {
    document.getElementById("items").innerHTML = "";
    cartProducts.forEach((element) => {
      const item = document.createElement("li");
      item.innerText = `Id: ${element.id} quantity: ${element.quantity}`;
      document.getElementById("items").appendChild(item);
    });
    return;
  }
  const item = document.createElement("li");
  item.innerText = `Id: ${id} quantity: 1`;
  document.getElementById("items").appendChild(item);
  const obj = {
    id: id,
    quantity: 1,
  };
  cartProducts.push(obj);
}
