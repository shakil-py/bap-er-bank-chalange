document.getElementById("login-btn").addEventListener("click", function () {
    const email = get_value_by_inputfield("email-field")
    const password = get_value_by_inputfield("password-field")
    if (email === "shakil@gmail.com" && password === "12345") {
        window.location.href = "index.html"
    }
})