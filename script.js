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

menuData.filter(item => item.special == true).forEach((item, index) => {
    menuInnerHTML += `
    <div class="menu-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="menu-card-text">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <h3>${item.price}</h3>
            <button onClick="addToCard(${index})" class="button">Add to Card</button>
        </div>
    </div>
    `
})
menu.innerHTML = menuInnerHTML

//Auth State check
if (sessionStorage.getItem('isLoggedIn') == 'true') {
    document.getElementById('nav-login').href = "./web-pages-html/profile.html"
}











