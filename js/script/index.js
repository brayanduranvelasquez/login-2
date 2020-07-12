let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', event => {
    event.preventDefault();
    let usuarioI = document.getElementById('usuarioI'); // I al final = input
    let contrasenaI = document.getElementById('contrasenaI');

    if (usuarioI.value != 'admin777*') {
        InputValidacion(usuarioI, 'error');

    } else if (contrasenaI.value != '123123123') {
        InputValidacion(usuarioI, 'exitoso');
        InputValidacion(contrasenaI, 'error');

    } else {
        alert('Datos exitosos.');

        InputValidacion(usuarioI, 'defecto');
        InputValidacion(contrasenaI, 'defecto');
        formulario.reset();
    }

})

function InputValidacion(input, condicion){ 
    // la condicion es: exitoso = validado, error = no validado y defecto = remover todos los estilos de las condiciones

    if(condicion == 'exitoso'){
        input.classList.remove('error-input');
        input.classList.add('bien-input');
    } 
    else if (condicion == 'error') {
        input.focus()
        input.classList.remove('bien-input');
        input.classList.add('error-input');
    }
    else if (condicion == 'defecto'){
        input.classList.remove('bien-input');
        input.classList.remove('error-input');
    }

}