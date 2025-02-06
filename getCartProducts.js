export const getCartProductsFromLS = () => {
    let cartProducts = localStorage.getItem("cartProducts");
    
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    return cartProducts;
};