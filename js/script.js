// Definir variables para los usuarios y contraseñas
let usuario1 = "Nico";
let contraseña1 = "1234";

let usuario2 = "Iara";
let contraseña2 = "1234";

let usuario3 = "Dani";
let contraseña3 = "1234";

// Función para realizar el login
alert("Esta es una simulación de login.");
alert("Estos son los diferentes usuarios y contraseñas para ingresar \n \n 1-usuario: Nico Contraseña 1234 \n 2-usuario: Iara Contraseña 1234 \n 3-usuario: Dani Contraseña 1234 ")

function login() {
    let usuarioIngresado = prompt("Ingrese su nombre de usuario: ");
    let contraseñaIngresada = prompt("Ingrese su contraseña: ");

    let usuarioValido = false;

    // Verificar si el usuario y la contraseña son válidos
    if ((usuarioIngresado === usuario1 && contraseñaIngresada === contraseña1) ||
        (usuarioIngresado === usuario2 && contraseñaIngresada === contraseña2) ||
        (usuarioIngresado === usuario3 && contraseñaIngresada === contraseña3)) {
        usuarioValido = true;
    }

    // Verificar si el usuario es válido
    if (usuarioValido) {
        alert("¡Bienvenido, " + usuarioIngresado + "!!!");
        return true; // Actualizar el estado del login a exitoso
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        return false; // El login falló
    }
}

// Función principal que solicita el inicio de sesión hasta que sea exitoso
function iniciarSesion() {
    let intentos = 3;

    while (intentos > 0) {
        if (login()) {
            break; // Si el inicio de sesión es exitoso, salir del bucle
        }
        intentos--;

        // Verificar si quedan intentos y preguntar al usuario si desea intentarlo de nuevo
        if (intentos > 0) {
            let intentarNuevamente = confirm("¿Desea intentarlo de nuevo? ");
            if (!intentarNuevamente) {
                break;
            }
        }
    }

    if (intentos === 0) {
        alert("Has agotado tus intentos. Por favor, inténtelo más tarde.");
    }
}

// Iniciar el proceso de inicio de sesión
iniciarSesion();