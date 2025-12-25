const form = document.querySelector(".signup")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")
const message = document.querySelector(".message")
const pwdchecker = document.querySelector(".pwdchecker")

function confirmer(event) {
    if (password.value !== confirm.value) {
        event.preventDefault();
        message.textContent = "password didn't match!";
        message.style.color = "red";
    } else {
        message.textContent = "password matched!";
        message.style.color = "green";
    }
}

function pwdEnhancer() {
    const pwd = password.value;
    if (pwd.length > 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd)) {
        pwdchecker.classList.add("strong");
    } else {
        pwdchecker.classList.remove("strong");
    }
}

form.addEventListener("submit", confirmer);
password.addEventListener("input", pwdEnhancer);