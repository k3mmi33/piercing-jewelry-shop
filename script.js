let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = []; // Initialize products array
let cart = [];

// Toggle cart visibility
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Function to add product data to HTML
const addDataToHTML = () => {
    listProductHTML.innerHTML = ''; // Clear existing products
    if (products.length > 0) { // Use 'products' instead of 'listProducts'
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.image}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <h3>${product.material}</h3>
                <p>${product.description}</p>
                <h4>${product.type}</h4>
                <button class="addCart">Add to Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

// Initialize the application
const initApp = () => {
    // get data product
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();