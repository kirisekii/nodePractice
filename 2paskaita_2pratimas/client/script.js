fetch('http://localhost:3000/products')
.then((resp) => resp.json())
.then((response) => {
    const productList = document.querySelector('ul');
    response.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        productList.append(li);
    })
}) 


const productBtn = document.getElementById('addProduct');
productBtn.addEventListener('click', () => {
    const product = document.querySelector("input[name='product']").value;
    const price = document.querySelector("input[name='price']").value;
   
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: product, price: price}),
      }).then(() => {
        location.reload();
      })
    
});
