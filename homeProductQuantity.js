export const toggleProductQuantity = (event, id, stock) => {
    const product = document.getElementById(`card-${id}`);
    const productQuantity = product.querySelector(".product-buy-quantity");
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.closest(".increase-btn")) {
        if (quantity < stock) {
            quantity++;            
        }
    }
    if (event.target.closest(".decrease-btn")) {
        if (quantity > 1) {
            quantity--;           
        }
    }

    productQuantity.setAttribute("data-quantity", quantity);
    productQuantity.textContent = productQuantity.dataset.quantity;
};