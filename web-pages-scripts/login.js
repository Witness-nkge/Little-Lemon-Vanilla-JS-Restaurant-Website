let authMode = "login"
const isValidEmail = (emailtest) => /\S+@\S+\.\S+/.test(emailtest);

//Switch to register mode
document.getElementById('signup').addEventListener('click', () => {
    
    authMode = "register"

    document.getElementById('nameFields').innerHTML = `
        <div class="form-input">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" placeholder="Michael" required>
        </div>
        <div class="form-input">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" placeholder="Don" required>
        </div>
    `
    const loginText = document.querySelector('.login-text')
    loginText.querySelector('h2').textContent = "Sign up for an account"
    loginText.querySelector('p').innerHTML =`Already have an account? <span id="login">Log in</span>`
    const loginButton = document.getElementById('login-button')
    loginButton.textContent = "Sign Up"
})

document.querySelector('.login-text').addEventListener('click', (e) => {
    if (e.target.id === 'login') {
        location.reload()
    }
})

//Register handler
function handleRegister() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const isValidPassword = (passwordTest) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(passwordTest)


    if(!firstName || !lastName || !email || !password) {}
    else if (!isValidEmail(email)) alert('Please input a valid email address')
    else if (!isValidPassword(password)) alert(`
        Your password must:

        • Be at least 8 characters long
        • Contain at least one uppercase letter 
        • Contain at least one lowercase letter
        • Include at least one number
        • Include at least one special character (e.g. ! @ # $ % ^ & *)
    `)
    else {
        const users = JSON.parse(sessionStorage.getItem('users')) || []

        users.push({
            firstName,
            lastName,
            email,
            password
        })
        sessionStorage.setItem('users', JSON.stringify(users))

        alert("Signed Up succefully, you can log into your account")
        location.reload()
    }
}    

//Login handler
function handleLogin() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const users = JSON.parse(sessionStorage.getItem('users')) || []
    const foundUser = users.find(
    user => user.email === email && user.password === password
    );


    if (!email || !password) {}
    else if (!isValidEmail(email)) alert('Please input a valid email address')
    else if (foundUser) {
        alert("You have logged in succefully")
        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('currentUserEmail', foundUser.email)
        window.location.href = "../index.html"
    }
    else {
        alert('User doent exist, Please sign up for an account')
    }
}

//Submit button handler
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    if (authMode === "login") {
        handleLogin()
    } else {
        handleRegister ()
    }
})




