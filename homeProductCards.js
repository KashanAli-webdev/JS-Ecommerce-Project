import { productAddToCart } from "./homeProductAddToCart";
import { toggleProductQuantity } from "./homeProductQuantity";
import { productStarRating } from "./homeProductRating";


const productsContainer = document.querySelector(".products-container");
const productTemplate = document.getElementById("product-template");

export const showProductCards = (products) => {
    if (!products) {
        return;
    }

    products.forEach((product) => {
        const {id, category, name, rating, price, oldPrice, stock, brand, image, description} = product;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".product-card").setAttribute("id", `card-${id}`);
        productClone.querySelector(".product-category").textContent = category;
        productClone.querySelector(".product-img").src = image;
        productClone.querySelector(".product-img").alt = `${name} image`;
        productClone.querySelector(".product-title").textContent = name;
        productClone.querySelector(".product-description").textContent = description;
        productClone.querySelector(".product-new-price").textContent = price;
        productClone.querySelector(".product-old-price").textContent = oldPrice;
        productClone.querySelector(".product-stock").textContent = stock;
        productStarRating(productClone.querySelectorAll(".product-star"), rating);
        productClone.querySelector(".product-quantity-holder").addEventListener("click", (event) => {
            toggleProductQuantity(event, id, stock);
        });
        productClone.querySelector(".product-cart-btn").addEventListener("click", (event) => {
            productAddToCart(id);
        });

        productsContainer.append(productClone);
    });
};