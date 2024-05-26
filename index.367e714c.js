const t=document.getElementById("app");(async()=>{let e=await fetch("https://fakestoreapi.com/products?limit=10"),a=await e.json(),i=a?.map(t=>`
    <article class="Card">
      <img src="${t.image}">
      <h2>${t.title}</h2> <small>$ ${t.price}</small>
    </article>
    `).join(""),s=document.createElement("section");s.classList.add("Items"),s.innerHTML=i,t.appendChild(s)})();
//# sourceMappingURL=index.367e714c.js.map
