import {menuData} from './data/menu-data.js'

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

menuData.forEach((item, index) => {
    menuInnerHTML += `
    <div class="menu-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="menu-card-text">
            <div class="menu-card-text-col-2">
                <h3>${item.name}</h3>
                <h3 style="color: #FF7700">${item.price}</h3>
            </div>
            <p>${item.description}</p>
            <a href="./web-pages-html/order.html?item=${index}">
                <h3>Order for Delivery</h3>
            </a>
        </div>
    </div>
    `
})
menu.innerHTML = menuInnerHTML

//Auth State check
if (sessionStorage.getItem('isLoggedIn') == 'true') {
    document.getElementById('nav-login').href = "./web-pages-html/profile.html"
}











