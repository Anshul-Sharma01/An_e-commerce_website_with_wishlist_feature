// JavaScript for displaying wishlist items and clearing the wishlist on the wishlist page
const wishlistItems = document.getElementById("wishlist-items");
const clearWishlistBtn = document.getElementById("clear-wishlist-btn");

// Function to retrieve all wishlist items from localStorage
function getAllWishlistItems() {
    const wishlistItemsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        const productId = localStorage.key(i);
        const productTitle = localStorage.getItem(productId);
        wishlistItemsArray.push({ id: productId, title: productTitle });
    }
    return wishlistItemsArray;
}

// Function to display wishlist items
function displayWishlistItems() {
    wishlistItems.innerHTML = '';
    const wishlistItemsArray = getAllWishlistItems();

    // Loop through and display wishlist items
    for (const item of wishlistItemsArray) {
        const listItem = document.createElement("div");
        listItem.classList.add("wishlist-item");

        // Create an image element for the product image
        const img = document.createElement("img");
        img.src = `product${item.id}.png`; // Adjust the image path accordingly
        img.alt = item.title;

        // Create a title element for the product title
        const title = document.createElement("h2");
        title.textContent = item.title;

        listItem.appendChild(img);
        listItem.appendChild(title);

        wishlistItems.appendChild(listItem);
    }
}

// Clear the wishlist
clearWishlistBtn.addEventListener("click", () => {
    localStorage.clear();
    wishlistItems.innerHTML = '';
});

// Display wishlist items on page load
window.addEventListener("load", displayWishlistItems);
