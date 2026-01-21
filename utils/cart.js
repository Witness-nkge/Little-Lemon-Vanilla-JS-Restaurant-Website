import {menuData} from "../data/menu-data.js"
import { getCart, setCart } from "./cart-state.js";

export function addToCart(itemIndex) {
    let cart = getCart()
    cart.push(itemIndex);
    setCart(cart)
}

export function countCart() {
    return getCart().length
}

export function cartTotal() {
    let total = 0;
    const cart = getCart()
    cart.forEach(index => {
        total += Number(menuData[index].price);
    });
    return total;
}