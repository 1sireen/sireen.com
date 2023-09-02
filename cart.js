// Sample car data (replace with your actual car data)
const cars = [
    {
        id: 1,
        name: 'Porche Car 1',
        price: 50000,
    },
    {
        id: 2,
        name: 'Porche Car 2',
        price: 60000,
    },
    // Add more car data as needed
];

const cart = []; // To store selected cars

// Function to add a car to the cart
function addToCart(carId) {
    const selectedCar = cars.find(car => car.id === carId);
    if (selectedCar) {
        cart.push(selectedCar);
        updateCartTotal();
        displayCart();
    }
}

// Function to remove a car from the cart
function removeFromCart(carId) {
    const carIndex = cart.findIndex(car => car.id === carId);
    if (carIndex !== -1) {
        cart.splice(carIndex, 1);
        updateCartTotal();
        displayCart();
    }
}

// Function to update the cart total
function updateCartTotal() {
    const cartTotal = cart.reduce((total, car) => total + car.price, 0);
    document.getElementById('cart-total').textContent = '$' + cartTotal.toFixed(2);
}

// Function to display the cart in cart.html
function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear the existing cart items

    cart.forEach(car => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="car_image.jpg" alt="${car.name}">
            <div class="item-details">
                <h2>${car.name}</h2>
                <p>Price: $${car.price.toFixed(2)}</p>
            </div>
            <button class="remove-button" onclick="removeFromCart(${car.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Call the displayCart function initially to load any existing items in the cart
displayCart();
