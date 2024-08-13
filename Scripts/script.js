document.addEventListener('DOMContentLoaded', () => {
    const llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    const textareaEncriptar = document.querySelector('.encriptar');
    const textareaEvaluar = document.querySelector('.evaluar');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');
    const contenido = document.getElementById('tar-conten');

    // Función para encriptar el mensaje
    function encriptarMensaje(mensaje) {
        let mensajeEncriptado = "";
        for (let i = 0; i < mensaje.length; i++) {
            let letra = mensaje[i];
            let encriptada = letra;
            for (let j = 0; j < llaves.length; j++) {
                if (letra === llaves[j][0]) {
                    encriptada = llaves[j][1];
                    break;
                }
            }
            mensajeEncriptado += encriptada;
        }
        return mensajeEncriptado;
    }

    // Función para desencriptar el mensaje
    function desencriptarMensaje(mensaje) {
        let mensajeDesencriptado = mensaje;
        for (let i = 0; i < llaves.length; i++) {
            let regex = new RegExp(llaves[i][1], 'g');
            mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
        }
        return mensajeDesencriptado;
    }

    // Función para copiar el contenido del textarea de la tarjeta
    function copiarTexto() {
        textareaEvaluar.select();
        document.execCommand('copy');
    }

    // Evento para el botón Encriptar
    btnEncriptar.addEventListener('click', () => {
        // Convertir el mensaje a minúsculas
        const mensaje = textareaEncriptar.value.toLowerCase();
        const mensajeEncriptado = encriptarMensaje(mensaje);
        textareaEvaluar.value = mensajeEncriptado;
        btnCopiar.style.visibility = 'visible';
        contenido.style.display = 'none'; // Ocultar el contenedor de contenido
    });

    // Evento para el botón Desencriptar
    btnDesencriptar.addEventListener('click', () => {
        const mensaje = textareaEncriptar.value;
        const mensajeDesencriptado = desencriptarMensaje(mensaje);
        textareaEvaluar.value = mensajeDesencriptado;
        contenido.style.display = 'none';
        btnCopiar.style.visibility = 'hidden';

    });

    // Evento para el botón Copiar
    btnCopiar.addEventListener('click', copiarTexto);
});
