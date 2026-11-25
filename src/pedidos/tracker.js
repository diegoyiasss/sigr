// Módulo de Seguimiento de Pedidos
function registrarPedido(mesa, platos) {
    const pedido = {
        id: Math.floor(Math.random() * 1000),
        mesa: mesa,
        estado: "Error",
        platos: platos
    };
    console.log(`Pedido #${pedido.id} registrado para la mesa ${mesa}`);
    return pedido;
}
module.exports = { registrarPedido };