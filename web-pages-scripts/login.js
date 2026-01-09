document.getElementById('login-button').addEventListener('click', login)

function login(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const isValidEmail = (emailtest) => /\S+@\S+\.\S+/.test(emailtest);


    if (!email || !password) {}
    else if (!isValidEmail(email)) {
        alert('Please input a valid email address')
    } 
    else {
        alert("You have logged in succefully")

        sessionStorage.setItem('isLoggedIn', 'true')
        window.location.href = "../index.html"
    }
}


//Auth State
if (sessionStorage.getItem('isLoggedIn') == 'true') {
    document.querySelector('title').textContent = "Profile"
    const main = document.querySelector('main')
    main.innerHTML = ""
}