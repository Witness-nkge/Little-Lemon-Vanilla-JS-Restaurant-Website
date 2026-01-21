export function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
}

export function setCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}