// JavaScript for wishlist functionality on the main page
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        const productTitle = e.target.previousElementSibling.innerText;

        // Check if the item is already in the wishlist
        if (!localStorage.getItem(productId)) {
            localStorage.setItem(productId, productTitle);
            alert(`${productTitle} added to your wishlist.`);
        } else {
            alert(`${productTitle} is already in your wishlist.`);
        }
    });
});
