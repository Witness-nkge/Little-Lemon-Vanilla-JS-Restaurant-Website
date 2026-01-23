import {menuData} from './data/menu-data.js'
import {addToCart, countCart} from './utils/cart.js'

//Testimonies
const testimonialsData = [
    {
        name: "Micheal Caldwell",
        testimony:"This is the best Mediterrannean food that I've ever had!"
    },
    {
        name: "Alan Chen",
        testimony:"My Shiba qInu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name: "Casey Lau",
        testimony:"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."
    }
]
const testimonials = document.getElementById('testimonials')
let testimonialsInnerHtml = ""
for (let i=0; i < testimonialsData.length; i++){
    testimonialsInnerHtml += `
    <div class="testimony-card">
        <p>⭐⭐⭐⭐⭐</p>
        <p>"${testimonialsData[i].testimony}"</p>
        <h3>- ${testimonialsData[i].name}</h3>
    </div>
    `
}
testimonials.innerHTML = testimonialsInnerHtml

//Menu
const menu = document.getElementById('menu')
let menuInnerHTML = ""

menuData.filter(item => item.special == true).forEach((item, index) => {
    menuInnerHTML += `
    <div class="menu-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="menu-card-text">
            <div class="menu-col-2">
                <h2>${item.name}</h2>
                <h3 class="item-price">$${item.price}</h3>
            </div>
            <p>${item.description}</p>
            <div class="actions">
                <div class="quantity">
                    <button onclick="decreaseQty(this)">-</button>
                    <span>1</span>
                    <button onclick="increaseQty(this)">+</button>
                </div>
                <button class="button add-btn" data-index="${index}">
                    Add to Cart
                </button>   
            </div>     
        </div>
    </div>
    `
})
menu.innerHTML = menuInnerHTML

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        const index = Number(button.dataset.index);
        const qty = parseInt(button.parentElement.querySelector('.quantity span').textContent);
        addToCart(index, qty);
        updateCartButton()
    });
});


function updateCartButton() {
    const cartBtn = document.querySelector('.floating-cart-btn');
    if (cartBtn) {
        cartBtn.textContent = `Cart (${countCart()})`;
    }
}


window.increaseQty = (btn) => {
    const span = btn.parentElement.querySelector('span');
    const qty = parseInt(span.textContent);
    span.textContent = qty + 1;
}

window.decreaseQty = (btn) => {
    const span = btn.parentElement.querySelector('span');
    let qty = parseInt(span.textContent)
    span.textContent = qty > 1 ? qty - 1 : 1;
}


//Auth State check
if (sessionStorage.getItem('isLoggedIn') == 'true') {
    document.getElementById('nav-login').href = "./web-pages-html/profile.html"
}

updateCartButton()











