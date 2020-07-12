// Expresiones regulares
let alfa = /^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ'´]+$/;
let letras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ'´]+$/;
let numeros = /^[0-9]+$/;
let espacios = /\s+/;
let caracteres = /^[!"#$%&/()=?¡'¿{}*+,.;:´]+$/;
let correoExp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+/

let nombreI = document.getElementById("nombre"); // I al final significa Input
let apellidoI = document.getElementById("apellido");
let correoI = document.getElementById("correo");
let usuarioI = document.getElementById("usuario");
let contraI = document.getElementById("contra");
let repiteContraI = document.getElementById("repitecontra");

nombreI.addEventListener("keyup", function () {
      let nombre = document.querySelector("#nombre").value; // cada input ira guardando su valor en una variable, para poder ir validando al ingresar o borrar un caracter en el input

      if (!letras.test(nombre)) {
            // Si lo ingresado no cumple la condicion, en este caso que sea diferente a el alfabeto (De la A a la Z), mostrará un mensaje y agregara al input, la clase correspondiente a la invalidacion
            mensajeNom.style.display = "block";
            nombreI.classList.add("is-invalid");

      } else {
            // De lo contrario, desaparecera el mensaje y y agregara al input, la clase correspondiente a la validacion

            mensajeNom.style.display = "none";
            nombreI.classList.remove("is-invalid");
            nombreI.classList.add("is-valid");
      }
})

apellidoI.addEventListener("keyup", function () {
      let apellido = document.getElementById("apellido").value;
      if (!letras.test(apellido)) {
            mensajeApe.style.display = "block";
            apellidoI.classList.add("is-invalid");

      } else if (caracteres.test(apellido)) {
            mensajeApe.style.display = "block";
            apellidoI.classList.add("is-invalid");

      } else {
            mensajeApe.style.display = "none";
            apellidoI.classList.remove("is-invalid");
            apellidoI.classList.add("is-valid");
      }

})

correoI.addEventListener("keyup", function () {
      let correo = document.getElementById("correo").value;
      if (!correoExp.test(correo) || espacios.test(correo)) {
            mensajeCo.style.display = "block";
            correoI.classList.add("is-invalid");
      } else {
            mensajeCo.style.display = "none";
            correoI.classList.remove("is-invalid");
            correoI.classList.add("is-valid");
      }
})

usuarioI.addEventListener("keyup", function () {
      let usuario = document.getElementById("usuario").value;
      if (!alfa.test(usuario) || usuario.length < 8 || espacios.test(usuario)) {
            mensajeUsu.style.display = "block";
            usuarioI.classList.add("is-invalid");
      } else {
            mensajeUsu.style.display = "none";
            usuarioI.classList.remove("is-invalid");
            usuarioI.classList.add("is-valid");
      }
})

contraI.addEventListener("keyup", function () {
      let contra = document.getElementById("contra").value;
      let repiteContra = document.getElementById("repitecontra").value;

      if (!alfa.test(contra) || contra.length < 7 || espacios.test(contra)) {
            mensajeCon.style.display = "block";
            contraI.classList.add("is-invalid");
            repiteContraI.classList.add("is-invalid");
            registrar.type = "button";
      }

      else {
            contraI.classList.remove("is-invalid");
            contraI.classList.add("is-valid");

            if (contra != repiteContra) {
                  mensajeCon.style.display = "none";
                  
                  repiteContraI.classList.remove("is-valid");
                  repiteContraI.classList.add("is-invalid");
                  mensajeConDosBien.style.display = "none";
                  mensajeConDosError.style.display = "block";
                  registrar.type = "button";

            } else if (contra == repiteContra) {
                  mensajeCon.style.display = "none";
                  contraI.classList.remove("is-invalid");
                  contraI.classList.add("is-valid");
                  repiteContraI.classList.add("is-valid");
                  repiteContraI.classList.remove("is-invalid");
                  mensajeConDosBien.style.display = "block";
                  mensajeConDosError.style.display = "none";
                  registrar.type = "submit";
            }
      }
      
})

repiteContraI.addEventListener("keyup", function () {
      let repiteContra = document.getElementById("repitecontra").value;
      let contra = document.getElementById("contra").value;
      
      if (repiteContra.length < 7 || espacios.test(repiteContra)) {
            mensajeConDosError.style.display = "block";
            mensajeConDosBien.style.display = "none";
            repiteContraI.classList.add("is-invalid");
            repiteContraI.classList.remove("is-valid");
            registrar.type = "button";

      } else if (repiteContra != contra) {
            mensajeConDosBien.style.display = "none";
            mensajeConDosError.style.display = "block";
            repiteContraI.classList.add("is-invalid");
            repiteContraI.classList.remove("is-valid");
            registrar.type = "button";

      } else if (contra == repiteContra) {
            mensajeConDosError.style.display = "none";
            mensajeConDosBien.style.display = "block";
            repiteContraI.classList.remove("is-invalid");
            repiteContraI.classList.add("is-valid");

            mensajeCon.style.display = "none";
            contraI.classList.remove("is-invalid");
            contraI.classList.add("is-valid");
            registrar.type = "submit";
      }
})