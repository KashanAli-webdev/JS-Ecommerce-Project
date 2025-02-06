const navCart = document.querySelector(".nav-cart-text");

export const updateNavCart = (cartProducts) => {
    navCart.innerText = cartProducts.length;
};