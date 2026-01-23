import {menuData} from "../data/menu-data.js"
import { getCart, setCart } from "./cart-state.js";

export function addToCart(itemIndex, itemQty) {
    const cart = getCart();

    const existingItem = cart.find(item => item.index === itemIndex);

    if (existingItem) {
        existingItem.qty = itemQty
    } else {
        cart.push({
            index: itemIndex,
            qty: itemQty
        });
    }
    
    setCart(cart);
}

export function countCart() {
    return getCart().length;
}

export function cartTotal() {
    let total = 0;
    const cart = getCart()
    cart.forEach(index => {
        total += Number(menuData[index].price);
    });
    return total;
}





