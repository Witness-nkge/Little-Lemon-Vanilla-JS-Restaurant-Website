import { menuData } from "../data/menu-data.js"

//Menu
const menu = document.getElementById('menu')

function renderMenu(items) {
    let html = ""

    items.forEach((item, index) => {
        html += `
        <div class="menu-card">
            <img src="../${item.image}" alt="${item.name}" />
            <div class="menu-card-text">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <h3>$${item.price}</h3>
                <button onclick="addToCart(${index})" class="button">
                    Add to Cart
                </button>
            </div>
        </div>
        `
    })

    menu.innerHTML = html
}

renderMenu(menuData)

function filterMenu(category) {
    if (category === 'all') {
        renderMenu(menuData)
        return
    }

    const filteredItems = menuData.filter(
        item => item.category === category
    )

    renderMenu(filteredItems)
}

const filters = document.querySelector('.filters')
const filter = filters.querySelectorAll('p')

filter.forEach(item => {
    item.addEventListener('click', () => {
        filter.forEach(p => p.classList.remove('active'))
        item.classList.add('active')

        const category = item.dataset.category
        filterMenu(category)
    })
})

