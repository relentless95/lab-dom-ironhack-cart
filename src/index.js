// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span").innerText;
  const quantityelement = product.querySelector(".quantity input").value;
  // const subtotalPrice = priceElement * quantityelement
  const subtotalElement = product.querySelector(".subtotal span");
  // const subtotalElement = priceElement*quantityelement

  subtotalElement.innerText = priceElement * quantityelement
  // console.log('Calculating subtotal, yey!', 
  // priceElement,
  // quantityelement,
  // // subtotalPrice,
  // // subtotalElement
  // );

  return priceElement * quantityelement
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  let products = document.querySelectorAll('.product');
  let total = 0
  // console.log(twoProducts)
  
  products.forEach(product => {
    total += updateSubtotal(product)})
  console.log(total)
  // updateSubtotal(twoProducts)

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = total
  
  // console.log(allsubtotals)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // .currentTarget is a reserved keyword
  // console.log('The target in remove is:', target);
  // //... your code goes here
  target.parentNode.parentNode.remove()

  


}


// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName= document.querySelector('input[placeholder="Product Name').value;
  let priceInput = document.querySelector('input[Placeholder="Product Price').value;

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');

  const nameTd = document.createElement('td');
  nameTd.classList.add('name')
  nameTd.innerHTML = `<span>${name}</span>`;
  const priceTd = document.createElement('td');
  priceTd.classList.add('price');
  priceTd.innerHTML = `$<span>${price}<span>`
  const quantityTd = document.createElement('td');
  quantityTd.classList.add('quantity');
  quantityTd.innerHTML=`<input type="number" value="0" min="0" placeholder="Quantity" />`;
  const subtotalTd = document.createElement('td');
  subtotalTd.classList.add('subtotal');
  subtotalTd.innerHTML = `$<span>${0}<span>`;
  const actionTd = document.createElement('td');
  actionTd.classList.add('action');
  actionTd.innerHTML = `<button class="btn btn-remove">Remove</button>
  </td>`

  newProduct.appendChild(nameTd)
  newProduct.appendChild(priceTd)
  newProduct.appendChild(quantityTd)
  newProduct.appendChild(subtotalTd)
  newProduct.appendChild(actionTd)

  const tbody = document.querySelector('tbody');
  tbody.appendChild(newProduct)

  let createBtn =document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let allRemoveBtn = document.querySelectorAll('.btn.btn-remove')
  allRemoveBtn.forEach(removeBtn =>{
  removeBtn.addEventListener('click', removeProduct)
  

})

  //... your code goes here
});

console.log(calculateAll())