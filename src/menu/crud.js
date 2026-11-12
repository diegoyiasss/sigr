// Módulo de Gestión de Menú
let menu = [];

function agregarPlato(id, nombre, precio) {
    menu.push({ id, nombre, precio });
    console.log(`Plato ${nombre} agregado con éxito.`);
}

function listarMenu() {
    return menu;
}
module.exports = { agregarPlato, listarMenu };