window.addEventListener("load", function(){
    
    const formulario = document.querySelector("form.register");

    formulario.addEventListener('submit', function(e){
        const errores =[];

        //NOMBRE Y APELLIDO

        const campoNombre = document.querySelector(".nombre input");
        if(campoNombre.value == ""){
            errores.push('El campo nombre no puede estar vacío');
            campoNombre.style.border="2px solid #be1c29";                              
        }else if(campoNombre.value.length < 2){
            errores.push('El campo nombre debe tener al menos 2 caracteres');
            campoNombre.style.border="2px solid #be1c29";   
        }else {
            campoNombre.style.border="2px solid #198754";   
        };

        let campoApellido = document.querySelector(".apellido input");
        if(campoApellido.value == ""){
            errores.push('El campo apellido no puede estar vacío');
            campoApellido.style.border="2px solid #be1c29";               
        }else if(campoApellido.value.length < 2){
            errores.push('El campo apellido debe tener al menos 2 caracteres');
            campoApellido.style.border="2px solid #be1c29";               
        }else {
            campoApellido.style.border="2px solid #198754";
        };

        // CORREO

        let campoCorreo = document.querySelector(".correo input");

        const formatoValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(campoCorreo.value === ""){
            errores.push('El campo correo no puede estar vacío');
            campoCorreo.style.border="2px solid #be1c29";            
        }if(!formatoValido.exec(campoCorreo.value)){
            errores.push('El campo correo debe estar escrito en un formato válido');
            campoCorreo.style.border="2px solid #be1c29";            
        }else {
            campoCorreo.style.border="2px solid #198754";
        };

        // CONTRASEÑA Y CONFIRMACIÓN
        
        
        let campoContraseña = document.querySelector(".contraseña input");
        if(campoContraseña.value == ""){
            errores.push('El campo contraseña no puede estar vacío');
            campoContraseña.style.border="2px solid #be1c29";            
        }else if(campoContraseña.value.length < 8){
            errores.push('El campo contraseña debe contener al menos 8 caracteres');
            campoContraseña.style.border="2px solid #be1c29";            
        }else {
            campoCorreo.style.border="2px solid #198754";
        };

        
        let campoConfirmacionContraseña = document.querySelector(".confirmacionContraseña input");
        if(campoConfirmacionContraseña.value == ""){
            errores.push('El campo confirmación de contraseña no puede estar vacío');
            campoConfirmacionContraseña.style.border="2px solid #be1c29";            
        }else if(campoConfirmacionContraseña.value.length < 8){
            errores.push('El campo confirmación de contraseña debe contener al menos 8 caracteres');
            campoConfirmacionContraseña.style.border="2px solid #be1c29";            
        }else if(campoConfirmacionContraseña.value !== campoContraseña.value){
            errores.push('Los valores de los campos contraseña y confirmación de contraseña no coinciden');
            campoConfirmacionContraseña.style.border="2px solid #be1c29";            
        }else {
            campoConfirmacionContraseña.style.border="2px solid #198754";
        };

        //AVATAR
        
        let campoAvatar = document.querySelector(".avatar input");
        const formatoAvatarValido =/.(gif|jpeg|jpg|png)$/i;

        if(campoAvatar.value == ""){
            errores.push('Debes subir un avatar');
            campoAvatar.style.border="2px solid #be1c29";            
        }else if(!formatoAvatarValido.exec(campoAvatar.value)){
            errores.push('El campo avatar debe tener una imagen en formato JPG, JPEG, PNG y/o GIF');
            campoAvatar.style.border="2px solid #be1c29";            
        }else {
            campoAvatar.style.border="2px solid #198754";
        };


        // ERRORES

        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
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