window.addEventListener("load", function(){

    let formulario = document.querySelector("form.login");

    formulario.addEventListener('submit', function(e){
        
        const errores =[];
        
        // CORREO

        let campoCorreo = document.querySelector(".correo input");

        const formatoValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(campoCorreo.value == ""){
            errores.push('El campo correo no puede estar vacío');
            campoCorreo.style.border="2px solid #be1c29";             
        }else if(!formatoValido.exec(campoCorreo.value)){
            errores.push('El campo correo debe estar escrito en un formato válido');
            campoCorreo.style.border="2px solid #be1c29";             
        }else {
            campoCorreo.style.border="2px solid #198754";
        };

        // CONTRASEÑA
        
        
        let campoContraseña = document.querySelector(".contraseña input");
        if(campoContraseña.value == ""){
            errores.push('El campo contraseña no puede estar vacío');
            campoContraseña.style.border="2px solid #be1c29";           
        }else {
            campoContraseña.style.border="2px solid #198754";
        };
        
        // ERRORES
        
        let ulErrors = document.querySelector('.errores');
        ulErrors.innerHTML = "";

        if (errores.length > 0) {
            e.preventDefault();
            ulErrors.classList.add('alert-warning');
            alert('Ups! Parece que hay inconvenientes con alguno de los campos.')
            for (let i = 0; i < errores.length; i++) {
                ulErrors.innerHTML += "<li>" +  errores[i] + "</li>";                
            };
            
        }else{
            alert('El registro se ha realizado 🙂');
            formulario.submit();
        }
    });
})