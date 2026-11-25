const test = require("node:test");
const assert = require("node:assert/strict");
const { registrarPedido } = require("../src/pedidos/tracker");

test("Carga íntegra de los 5 módulos de SIGR (auth, caja, menu, pedidos, reservas)", () => {
  assert.doesNotThrow(() => require("../src/auth/login"));
  assert.doesNotThrow(() => require("../src/caja/reportes"));
  assert.doesNotThrow(() => require("../src/menu/crud"));
  assert.doesNotThrow(() => require("../src/pedidos/tracker"));
  assert.doesNotThrow(() => require("../src/reservas/calendar"));
});

test("Módulo Pedidos: registra pedido en estado 'En preparación'", () => {
  const pedido = registrarPedido(5, ["Ajiaco", "Jugo Natural"]);
  assert.equal(pedido.mesa, 5);
  assert.equal(pedido.estado, "En preparación");
  assert.deepEqual(pedido.platos, ["Ajiaco", "Jugo Natural"]);
  assert.equal(typeof pedido.id, "number");
});

test("Rendimiento: registro de 500 pedidos en menos de 100 ms", () => {
  const inicio = performance.now();
  for (let i = 0; i < 500; i++) {
    registrarPedido(1, ["Plato del día"]);
  }
  const duracion = performance.now() - inicio;
  assert.ok(duracion < 100, `Tiempo excedido: ${duracion} ms`);
});