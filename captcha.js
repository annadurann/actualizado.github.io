
function generateCaptcha() {
    const captchaText = Math.random().toString(36).substr(2, 6).toUpperCase();
    document.getElementById("captcha").textContent = captchaText;
}

//Verificar
function checkCaptcha() {
    const captchaInput = document.getElementById("captchaInput").value.toUpperCase();
    const captchaTexto = document.getElementById("captcha").textContent;

    if (captchaInput === captchaTexto) {
    
        window.location.href = "curriculum.html";
    } else {
        const Mensaje = document.getElementById("captchaResultado");
        Mensaje.textContent = "Captcha incorrecto. Inténtalo de nuevo.";
        Mensaje.style.color = "red";
    }
}

// al cargar la página
generateCaptcha();