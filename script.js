//Testimonies
const testimonialsData = [
    {
        name: "Micheal Caldwell",
        testimony:"This is the best Mediterrannean food that I've ever had!"
    },
    {
        name: "Alan Chen",
        testimony:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
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
        <h3>${testimonialsData[i].name}</h3>
        <p>${testimonialsData[i].testimony}</p>
    </div>
    `
}
testimonials.innerHTML = testimonialsInnerHtml

//Menu
const menuData = [
    {
        image: "assets/greek-salad.jpg",
        name: "Greek Salad",
        price: "$12.99",
        description: "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
    },
    {
        image: "assets/bruchetta.JPG",
        name: "Brushetta",
        price: "$16.99",
        description: "Toasted bread, topped with tomato, prosciutto and cheese.Seasoned with salt and olive oil."
    },
    {
        image: "assets/lemon-dessert.jpg",
        name: "Lemon Dessert",
        price: "$8.50",
        description: "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
    }
]

const menu = document.getElementById('menu')
let menuInnerHTML = ""

for (let x = 0; x < menuData.length; x++) {
    menuInnerHTML += `
    <div class="menu-card">
        <img src="${menuData[x].image}" alt="${menuData[x].name}" />
        <div class="menu-card-text">
            <div class="col-2-styled">
                <h3>${menuData[x].name}</h3>
                <h3 style="color: #FF7700">${menuData[x].price}</h3>
            </div>
            <p>${menuData[x].description}</p>
            <a href="">
                <h3>Order for Delivery</h3>
            </a>
        </div>
    </div>
    `
}
menu.innerHTML = menuInnerHTML









