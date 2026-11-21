
// Dark Mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});


// Shopping Bag
let quantity = 0;
const price = 29999;

const shoppingBag = document.getElementById("shoppingBag");
const quantityDisplay = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("totalPrice");

const addToBagBtn = document.getElementById("addToBagBtn");

addToBagBtn.addEventListener("click", function () {

    quantity++;

    quantityDisplay.textContent = quantity;
    totalPriceDisplay.textContent = (quantity * price).toLocaleString("en-IN");

    shoppingBag.hidden = false;

    shoppingBag.scrollIntoView({
        behavior: "smooth"
    });

});

// Buy Now
const buyNowBtn = document.getElementById("buyNowBtn");

buyNowBtn.addEventListener("click", function () {

    const confirmPurchase = confirm(
        "Do you want to purchase the Gaming Console for ₹29,999?"
    );

    if (confirmPurchase) {
        alert(
            "Thank you! Your purchase has been confirmed.\n" +
            "Product: NextGen Gaming Console\n" +
            "Price: ₹29,999"
        );
    }

});


