/* eslint-disable strict */
let carts = document.querySelectorAll('#add-cart');

let products = [
  {
    name: 'Macro OS',
    tag: 'OS',
    price: 29,
    inCart: 0
  },
  {
    name: 'MacroHard 16T',
    tag: '16T',
    price: 499,
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
    price: 499,
    inCart: 0
  },
  {
    name: 'Macrohard 16S',
    tag: '16S',
    price: 299,
    inCart: 0
  },
  {
    name: 'MacroHard 32S',
    tag: '32S',
    price: 399,
    inCart: 0
  },
  {
    name: 'MacroHard 64S',
    tag: '64S',
    price: 499,
    inCart: 0
  },
  {
    name: 'MacroHard 128S',
    tag: '128S',
    price: 599,
    inCart: 0
  }
];

for (let i = 0; i < carts.length; i += 1) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#cart-title span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers, 10);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cart-title span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart-title span').textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) 
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
};

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  console.log('My cart cost is', cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setitem('totalCost', cartCost + product.price)
  }else{
    localStorage.setitem('totalCost', product.price);
  }
}
onLoadCartNumbers();
