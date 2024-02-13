// Base de datos de usuarios (simulada)

let usuarios = [
    { usuario: "nico", contraseña: "1234" },
    { usuario: "fede", contraseña: "1234" },
    { usuario: "agus", contraseña: "1234" }
  ];
  
  // Función para realizar el login
  alert ("esta es una simulacion de loguin ")
  function login() {
    let usuarioIngresado = prompt("Ingrese su nombre de usuario: ");
    let contraseñaIngresada = prompt("Ingrese su contraseña: ");
  
    let usuarioValido = false;
  
    // Buscar el usuario en la base de datos
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].usuario === usuarioIngresado && usuarios[i].contraseña === contraseñaIngresada) {
        usuarioValido = true;
        break;
      }
    }
  
    // Verificar si el usuario es válido
    if (usuarioValido) {
      alert( "Bienvenido",  + usuarioIngresado + "!");
    } else {
      alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  }
  
  // Función principal que solicita el inicio de sesión hasta que sea exitoso
  function iniciarSesion() {
    let intentos = 2;
    let loginExitoso = false;
  
    while (intentos > 0 && !loginExitoso) {
      login();
      intentos--;
  
      // Verificar si el login fue exitoso
      if (intentos > 0) {
        let intentarNuevamente = confirm("¿Desea intentarlo de nuevo? ");
        if (!intentarNuevamente) {
          break;
        }
      }
    }
  
    if (intentos === 0 && !loginExitoso) {
      alert("Has agotado tus intentos. Por favor, inténtelo más tarde. ");
    }
  }
  
  // Iniciar el proceso de inicio de sesión
  iniciarSesion();