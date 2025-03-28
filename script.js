let cart = []; // Array to hold cart items
let totalPrice = 0; // Variable to hold total price
let allProducts = []; // Array to hold all products for filtering

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('products.json'); // Load default products on page load
});

// Function to load products from a JSON file
function loadProducts(file) {
    fetch(file) // Fetches the specified JSON file
        .then(response => response.json()) // Parses the response as JSON
        .then(data => {
            allProducts = data; // Store all products for filtering
            displayProducts(allProducts); // Display all products
        })
        .catch(error => console.error('Error fetching products:', error)); // Logs any errors
}
