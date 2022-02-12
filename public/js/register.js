window.addEventListener("load", function(){
    
    const formulario = document.querySelector("form.register");

    formulario.addEventListener('submit', function(e){
        const errores =[];

        //NOMBRE Y APELLIDO

        const campoNombre = document.querySelector(".nombre input");
        if(campoNombre.value == ""){
            errores.push('El campo nombre no puede estar vacío');
            campoNombre.classList.add('is-invalid');            
        }else if(campoNombre.value.length < 2){
            errores.push('El campo nombre debe tener al menos 2 caracteres');
            campoNombre.classList.add('is-invalid');
        }else {
            campoNombre.classList.add('is-valid');
            campoNombre.classList.remove('is-invalid');
        };

        let campoApellido = document.querySelector(".apellido input");
        if(campoApellido.value == ""){
            errores.push('El campo apellido no puede estar vacío');
            campoApellido.classList.add('is-invalid');            
        }else if(campoApellido.value.length < 2){
            errores.push('El campo apellido debe tener al menos 2 caracteres');
            campoApellido.classList.add('is-invalid');            
        }else {
            campoApellido.classList.add('is-valid');
            campoApellido.classList.remove('is-invalid');
        };

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
        };

        // CONTRASEÑA Y CONFIRMACIÓN
        
        
        let campoContraseña = document.querySelector(".contraseña input");
        if(campoContraseña.value == ""){
            errores.push('El campo contraseña no puede estar vacío');
            campoContraseña.classList.add('is-invalid');            
        }else if(campoContraseña.value.length < 8){
            errores.push('El campo contraseña debe contener al menos 8 caracteres');
            campoContraseña.classList.add('is-invalid');            
        }else {
            campoContraseña.classList.add('is-valid');
            campoContraseña.classList.remove('is-invalid');
        };

        
        let campoConfirmacionContraseña = document.querySelector(".confirmacionContraseña input");
        if(campoConfirmacionContraseña.value == ""){
            errores.push('El campo confirmación de contraseña no puede estar vacío');
            campoConfirmacionContraseña.classList.add('is-invalid');            
        }else if(campoConfirmacionContraseña.value.length < 8){
            errores.push('El campo confirmación de contraseña debe contener al menos 8 caracteres');
            campoConfirmacionContraseña.classList.add('is-invalid');            
        }else if(campoConfirmacionContraseña.value === campoContraseña.value){
            errores.push('El campo confirmación de contraseña debe coincidir con el valor ingresado en el campo contraseña');
            campoConfirmacionContraseña.classList.add('is-invalid');            
        }else {
            campoConfirmacionContraseña.classList.add('is-valid');
            campoConfirmacionContraseña.classList.remove('is-invalid');
        };

        //AVATAR
        
        let campoAvatar = document.querySelector(".avatar input");

        if(campoAvatar.value == ""){
            errores.push('Debes subir un avatar');
            campoAvatar.classList.add('is-invalid');            
        }else if(/.(gif|jpeg|jpg|png)$/i.test(campoAvatar.value)){
            errores.push('El campo avatar debe tener una imagen en formato JPG, JPEG, PNG y/o GIF');
            campoAvatar.classList.add('is-invalid');            
        }else {
            campoAvatar.classList.add('is-valid');
            campoAvatar.classList.remove('is-invalid');
        };


        // ERRORES

        let ulErrors = document.querySelector('.errores');
        console.log(ulErrors);
        
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