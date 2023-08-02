document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validar las credenciales (ejemplo: usuario=admin, contraseña=12345)
    if (usuario === "admin" && contrasena === "12345") {
        // Redireccionar a otro formulario o página
        windows.window.
        window.location.href = "../html/registro.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
