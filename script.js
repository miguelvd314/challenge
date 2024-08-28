document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('.textarea');
    const mensaje = document.querySelector('.mensaje');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.copiar');

    // Función para encriptar el texto
    function encriptar(texto) {
        let textoEncriptado = texto.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptar(texto) {
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    // Evento para el botón de encriptar
    btnEncriptar.addEventListener('click', () => {
        const texto = textarea.value;
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
    });

    // Evento para el botón de desencriptar
    btnDesencriptar.addEventListener('click', () => {
        const texto = textarea.value;
        const textoDesencriptado = desencriptar(texto);
        mensaje.value = textoDesencriptado;
    });

    // Evento para el botón de copiar
    btnCopiar.addEventListener('click', () => {
        mensaje.select();
        document.execCommand('copy');
        alert('Texto copiado');
    
        // Limpiar el contenido de "mensaje" y enfocar el cursor en "textarea"
        mensaje.value = '';
        textarea.value = '';
        textarea.focus();
    });
});
