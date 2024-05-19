const password = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%&*_+=?."
const passLength = 12;
const fullPassword = lowercase + number;

function createPassword(){
    let newpassword = "";
    newpassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newpassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    newpassword += number[Math.floor(Math.random() * number.length)];
    newpassword += symbol[Math.floor(Math.random() * symbol.length)];

    while (passLength > newpassword.length) {
        newpassword += fullPassword[Math.floor(Math.random() * fullPassword.length)];
    }

    password.value = newpassword;
}

document.getElementById("generate-btn").addEventListener("click", createPassword);

