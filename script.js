function validar() {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("mensagem");

    msg.className = "";
    msg.innerText = "";


    

    if (email === "") {
        return mostrarErro("O campo de e-mail não pode estar vazio.");
    }

    if (email.length < 10) {
        return mostrarErro("O e-mail deve ter pelo menos 10 caracteres.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        return mostrarErro("O e-mail deve conter '@' e '.'.");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return mostrarErro("Formato de e-mail inválido.");
    }

   
    if (senha === "") {
        return mostrarErro("O campo de senha não pode estar vazio.");
    }

    if (senha.length < 6) {
        return mostrarErro("A senha deve ter no mínimo 6 caracteres.");
    }

    if (!/[0-9]/.test(senha)) {
        return mostrarErro("A senha deve conter pelo menos 1 número.");
    }

    if (!/[A-Z]/.test(senha)) {
        return mostrarErro("A senha deve conter pelo menos 1 letra maiúscula.");
    }

    if (!/[a-z]/.test(senha)) {
        return mostrarErro("A senha deve conter pelo menos 1 letra minúscula.");
    }


    msg.classList.add("success");
    msg.innerText = "Login realizado com sucesso!";
    return false; 
}

function mostrarErro(texto) {
    const msg = document.getElementById("mensagem");
    msg.classList.add("erro");
    msg.innerText = texto;
    return false;
}

