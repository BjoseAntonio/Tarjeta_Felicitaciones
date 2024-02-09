function validarFormulario(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    //validar si el campo de usuario esta vacio 
    if(username.trim() === "" || password.trim() === ""){
        mostrarMensaje('Por favor de completar los campos');

        setTimeout(function(){
            limpiarMensaje();
        },1000)


        return false;//Evita que el formulario se envie 
    }

    if(username === "usuario" && password === "con"){
        window.location.href = "inicio.html";
        return false;
    }else{
        mostrarMensaje('Los datos son incorrectos');

        setTimeout(function(){
            limpiarMensaje();
        },1000)


        return false;
    }

    return true;
}

function mostrarMensaje(mesaje){
    document.getElementById("message").textContent = mesaje;
}

function limpiarMensaje(){
    document.getElementById("message").textContent = "";
}