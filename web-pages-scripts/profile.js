const email = sessionStorage.getItem('currentUserEmail')
const users = JSON.parse(sessionStorage.getItem('users')) || []
const currentUser = users.find(user => user.email == email)

const profileText = document.querySelector('.profile-text')
profileText.querySelector('h2').textContent = `${currentUser.firstName} ${currentUser.lastName}`
profileText.querySelector('p').textContent = currentUser.email


//Logout 
document.getElementById('logout-button').addEventListener('click', () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUserEmail");
    window.location.replace("../web-pages-html/login.html")
})


// Reservation
const reservation = document.getElementById('reservation');

reservation.addEventListener('click', () => {
    const container = document.getElementById('container');
    const stored = sessionStorage.getItem('reservation');

    if (!stored) {
        container.textContent = "No Table reserved";
    }

    const reservationData = JSON.parse(stored);

    const lastReservation = reservationData[reservationData.length - 1];

    const reservationHistoryHTML = reservationData
        .map(r => `
            <div class="reservation-card">
                <p><strong>Seating:</strong> ${r.radioValue}</p>
                <p><strong>Date:</strong> ${r.date}</p>
                <p><strong>Diners:</strong> ${r.diners}</p>
                <p><strong>Occasion:</strong> ${r.occasion}</p>
                <p><strong>Time:</strong> ${r.time}</p>
            </div>
        `)
        .join('');

    container.innerHTML = `
        <h2 style="margin-top:20px">Latest Table Reservation</h2>
        <div class="reservation-card">
            <p><strong>Seating:</strong> ${lastReservation.radioValue}</p>
            <p><strong>Date:</strong> ${lastReservation.date}</p>
            <p><strong>Diners:</strong> ${lastReservation.diners}</p>
            <p><strong>Occasion:</strong> ${lastReservation.occasion}</p>
            <p><strong>Time:</strong> ${lastReservation.time}</p>
            <button class="button">Cancel</button>
            <button class="button">Edit</button>
        </div>

        <h2 style="margin-top:20px">Reservation History</h2>
        ${reservationHistoryHTML}
    `;
});

console.log(sessionStorage.getItem('reservation'));
console.log(sessionStorage.getItem('users'));
