/* eslint-disable key-spacing */
/* eslint-disable radix */
/* eslint-disable quotes */
/* eslint-disable strict */
let carts = document.querySelectorAll('.add-cart');
let productNumbers = localStorage.getItem('cartNumbers');
let cartItems = localStorage.getItem("productsInCart");

let products = [
  {
    name: 'Macro OS',
    tag: 'OS',
    price: 29.99,
    inCart: 0
  },
  {
    name: 'MacroHard 16T',
    tag: '16T',
    price: 449,
    inCart: 0
  },
  {
    name: 'MacroHard 32T',
    tag: '32T',
    price: 629,
    inCart: 0
  },
  {
    name: 'MacroHard BitFace',
    tag: 'BitFace',
    price: 419,
    inCart: 0
  },
  {
    name: 'Macrohard 16S',
    tag: '16S',
    price: 279,
    inCart: 0
  },
  {
    name: 'MacroHard 32S',
    tag: '32S',
    price: 379,
    inCart: 0
  },
  {
    name: 'MacroHard 64S',
    tag: '64S',
    price: 479,
    inCart: 0
  },
  {
    name: 'MacroHard 128S',
    tag: '128S',
    price: 579,
    inCart: 0
  }
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
  });
}
function onLoadCartNumbers() {
  if (productNumbers) {
    document.querySelector('.cart-header span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-header span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-header span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  if (cartItems != null) {
    cartItems = {
      ...cartItems,
      [product.tag]: product
    };
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
onLoadCartNumbers();
