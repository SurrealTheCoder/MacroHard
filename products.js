let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name:'Shirt',
        tag: 'shirt',
        price: 15,
        inCart: 0
    },

    {
        name:'Watch',
        tag:'watch',
        price: 26,
        inCart: 0
    },

    {
        name:'Hoodie',
        tag:'hoodie',
        price: 10,
        inCart: 0
    },

    {
        name:'Jeans',
        tag:'jeans',
        price: 30,
        inCart: 0
    },

    {
        name:'Socks',
        tag:'socks',
        price: 15,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart h3').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart h3').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    

    if(cartItems != null) {

    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify 
    (cartItems));
}

function totalCost(product) {
    console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost );
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}




onLoadCartNumbers();
