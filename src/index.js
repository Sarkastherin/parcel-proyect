const app = document.getElementById('app')
const API = "https://fakestoreapi.com/products?limit=10";

const main = async () => {
  const response = await fetch(API);
  const products = await response.json();

  const output = products?.map((product) => {
    return `
    <article class="Card">
      <img src="${product.image}">
      <h2>${product.title}</h2> <small>$ ${product.price}</small>
    </article>
    `;
  }).join('');
  let newItem = document.createElement('section');
  newItem.classList.add("Items");
  newItem.innerHTML = output;
  app.appendChild(newItem);
}
main()