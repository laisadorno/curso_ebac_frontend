const form = document.getElementById('form-deposito');

let formEValido = false;

function validaNumero(campoA,campoB) {
        return campoB > campoA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-A').value;
    const numeroB = document.getElementById('numero-B').value;
    const campoA = parseFloat(numeroA)
    const campoB = parseFloat(numeroB)
    const mensagemSucesso = 'É válido!';
    const mensagemErro = 'Não é válido';
    

    formEValido = validaNumero(campoA,campoB);
        if (formEValido == true) {
            const containerMensagemSucesso = document.querySelector('.sucess-message');
            document.querySelector('.error-message').style.display = 'none';
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';
            campoA.value = '';
            campoB.value = '';
        } else {
            (!formEValido)
            const containerMensagemErro = document.querySelector('.error-message');
            document.querySelector('.sucess-message').style.display = 'none';
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
            campoA.value = '';
            campoB.value = '';
    }
})

console.log(form);