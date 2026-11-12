// Módulo de Autenticación SIGR
function login(username, password) {
    if (username === "admin" && password === "12345") {
        console.log("Acceso concedido. Bienvenido al sistema.");
        return true;
    }
    console.log("Credenciales inválidas.");
    return false;
}
module.exports = { login };