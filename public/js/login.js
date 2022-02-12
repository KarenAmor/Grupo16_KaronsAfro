window.addEventListener("load", function(){

    let formulario = document.querySelector("form.login");
    formulario.campoCorreo.focus();

    formulario.addEventListener('submit', function(e){
        
        const errores =[];
        
        // CORREO

        let campoCorreo = document.querySelector(".correo input");

        const formatoValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(campoCorreo.value == ""){
            errores.push('El campo correo no puede estar vacío');
            campoCorreo.classList.add('is-invalid');            
        }if(formatoValido.test(campoCorreo.value)){
            errores.push('El campo correo debe estar escrito en un formato válido');
            campoCorreo.classList.add('is-invalid');            
        }else {
            campoCorreo.classList.add('is-valid');
            campoCorreo.classList.remove('is-invalid');
            formulario.campoContraseña.focus();
        };

        // CONTRASEÑA
        
        
        let campoContraseña = document.querySelector(".contraseña input");
        if(campoContraseña.value == ""){
            errores.push('El campo contraseña no puede estar vacío');
            campoContraseña.classList.add('is-invalid');            
        }else {
            campoContraseña.classList.add('is-valid');
            campoContraseña.classList.remove('is-invalid');
        };
        
        // ERRORES
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            for (let i = 0; i < errores.length; i++) {
                ulErrors.innerHTML += "<li>" +  errores[i] + "</li>";
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }
    });
})