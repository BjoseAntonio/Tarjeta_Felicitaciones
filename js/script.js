// Sonido
function toggleSound() {
    var audio = document.getElementById("audio");
    var speakerIcon = document.getElementById("speakerIcon");
    var muteIcon = document.getElementById("muteIcon");

    if (audio.paused) {
        audio.play();
        speakerIcon.style.display = "inline";
        muteIcon.style.display = "none";
    } else {
        audio.pause();
        speakerIcon.style.display = "none";
        muteIcon.style.display = "inline";
    }
}

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

// document.addEventListener('DOMContentLoaded', function(){
//     const numGlobos = 5; // Número de globos
//     const contenedor = document.getElementById("contenido__globos");

//     for (let i = 0; i < numGlobos; i++) {
//         const globo = document.createElement("div");
//         globo.classList.add("globo");
//         globo.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
//         globo.style.bottom = `${Math.random() * 100}vh`; // Posición vertical aleatoria
//         contenedor.appendChild(globo);
//     }
// });


document.getElementById("card").addEventListener("click",function(){
    this.classList.toggle("girada")
});