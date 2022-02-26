window.addEventListener("load", function(){
    const formulario = document.querySelector("form.register")

    formulario.addEventListener('submit', function(e){
        const errores =[];

        let campoNombreProducto = document.querySelector(".nombreProducto #nombreProducto");
        
        if (campoNombreProducto.value=="") {
            errores.push("El campo Nombre del Producto debe estar completo")
            campoNombreProducto.style.border="2px solid #be1c29"; 
        } else if (campoNombreProducto.value.length<5){
            errores.push("El campo nombre del producto debe tener al menos 5 caracteres")  
            campoNombreProducto.style.border="2px solid #be1c29"; 
        }else{
            campoNombreProducto.style.border="2px solid #198754"
        }

        let campoPrecio = document.querySelector(".precioProducto #precioProducto");
        
        if (campoPrecio.value=="") {
            errores.push("El campo del precio no debe estar vacio")
            campoPrecio.style.border="2px solid #be1c29";
        }else{
            campoPrecio.style.border="2px solid #198754"
        }

        let campoReferencia = document.querySelector(".referenciaProducto #referenciaProducto");
        
        if (campoReferencia.value=="") {
            errores.push("El campo referencia no debe estar vacio")
            campoReferencia.style.border="2px solid #be1c29"; 
        } else if (campoReferencia.value.length<0){
            errores.push("El campo referencia debe tener al menos 1 caracter") 
            campoReferencia.style.border="2px solid #be1c29"; 
        }else{
            campoReferencia.style.border="2px solid #198754"
        }

        let campoCantidadDisponible = document.querySelector(".cantidadProducto #cantidadProducto");
        
        if (campoCantidadDisponible.value=="") {
            errores.push("El campo cantidad Producto no debe estar vacio")
            campoCantidadDisponible.style.border="2px solid #be1c29"; 
        }else{
            campoCantidadDisponible.style.border="2px solid #198754"
        }

        let campoDescripcionProducto = document.querySelector(".descripcionProducto #descripcionProducto");
        
        if (campoDescripcionProducto.value=="") {
            errores.push("El campo Descripcion del Producto no debe estar vacio")
            campoDescripcionProducto.style.border="2px solid #be1c29"; 
        } else if (campoDescripcionProducto.value.length<20){
            errores.push("El campo Descripcion del Producto debe tener al menos 20 caracteres")
            campoDescripcionProducto.style.border="2px solid #be1c29";   
        }else{
            campoDescripcionProducto.style.border="2px solid #198754"
        }

        let campoImagenProducto = document.querySelector(".imagenProducto #imagenProducto");
        const formatoImagenProductoValido =/.(gif|jpeg|jpg|png)$/i;
        
        if(campoImagenProducto.value == ""){
            errores.push('Debes subir una imagen del producto');
            campoImagenProducto.style.border="2px solid #be1c29"; 
        }else if(!formatoImagenProductoValido.exec(campoImagenProducto.value)){
            errores.push('El campo Imagen del producto debe tener una imagen en formato JPG, JPEG, PNG y/o GIF');
            campoImagenProducto.style.border="2px solid #be1c29";            
        }else {
            campoImagenProducto.style.border="2px solid #198754";
        };    

    let ulErrors = document.querySelector('.errores');
    ulErrors.innerHTML = "";
        console.log(campoDescripcionProducto.value.length);
    if (errores.length > 0) {
        e.preventDefault();  
        ulErrors.classList.add('alert-warning');
        alert('Ups! Parece que hay inconvenientes con alguno de los campos.')
        for (let i = 0; i < errores.length; i++) {
            ulErrors.innerHTML += "<li>" +  errores[i] + "</li>"; 
        };

    }else{
        alert('El registro se ha realizado 🙂');
            boton.submit();
        }
    });
})