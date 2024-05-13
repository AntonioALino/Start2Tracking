
// Realiza cadastro
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.length >= 4 && password.length >= 6) {
        window.location.href = 'index-logged.html';
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
}