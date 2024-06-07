// This is where you can add interactivity to your site with JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add to cart button alert
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('This item has been added to your cart.');
        });
    });
});
