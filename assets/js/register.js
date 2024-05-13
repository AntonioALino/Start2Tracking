
// Limpa os campos
function clearInput() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirm').value = '';   
}

// Atualiza a página
function redirect() {
    window.location.href = 'index.html'
}

// Realiza cadastro
function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordConfirm').value;

    if (username.length >= 4 && password.length >= 6 && password === passwordConfirm) {
        window.location.href = 'login.html';
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
}