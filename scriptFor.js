document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const massageInput = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const massageError = document.getElementById("message-error")

    contactForm.addEventListener("submit", function(event) {
        let isValid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if(nameInput.value === "") {
            nameError.textContent = "Por favor, insira seu nome aqui";
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailPattern.test(emailInput.Value)) {
            emailError.textContent = "Por favor insira um e-mail válido"
            isValid = false;
        }

        if(messageInput.value === "") {
            messageError.textContent = "Por Favor, insira uma mensagem";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // impede o envio do formulario se houver erros
        }
    });
});