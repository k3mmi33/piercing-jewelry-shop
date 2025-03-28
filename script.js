let cart = []; // Array to hold cart items
let totalPrice = 0; // Variable to hold total price
let allProducts = []; // Array to hold all products for filtering

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('https://api.example.com/products'); // Replace with your API endpoint
});

// Function to load products from an API
function loadProducts(apiUrl) {
    fetch(apiUrl) // Fetches the specified API URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parses the response as JSON
        })
        .then(data => {
            allProducts = data; // Store all products for filtering
            displayProducts(allProducts); // Display all products
        })
        .catch(error => console.error('Error fetching products:', error)); // Logs any errors
}

// Function to display products
function displayProducts(products) {
    const productGrid = document.getElementById('productGrid'); // Selects the product grid element
    productGrid.innerHTML = ''; // Clears the existing products
    products.forEach(product => { // Iterates over each product in the data
        const productDiv = document.createElement('div'); // Creates a new div for the product
        productDiv.className = 'product'; // Sets the class for styling
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="width:100%">
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="showProductDetails(${product.id})">View Details</button> <!-- View Details button -->
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button> <!-- Add to Cart button -->
        `;
        productGrid.appendChild(productDiv); // Appends the product div to the product grid
    });
}

