import { getCartProductsFromLS } from "./getCartProducts";
import { updateNavCart } from "./homeNavCartUpdate";

updateNavCart(getCartProductsFromLS());

export const productAddToCart = (id) => {
    let arrCartProductsLS = getCartProductsFromLS();

    const product = document.getElementById(`card-${id}`);
    let price = parseInt(product.querySelector(".product-new-price").innerText);
    let quantity = parseInt(product.querySelector(".product-buy-quantity").innerText);
    price *= quantity;

    let existingCartProduct = getCartProductsFromLS().find((currentProduct) => currentProduct.id === id);
    if (existingCartProduct) {
        return;
    }

    arrCartProductsLS.push({id, price, quantity});
    localStorage.setItem("cartProducts", JSON.stringify(arrCartProductsLS));

    updateNavCart(arrCartProductsLS);
};