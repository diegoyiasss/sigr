const http = require("node:http");
const { registrarPedido } = require("./pedidos/tracker");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: "UP",
      service: "SIGR-Restaurante",
      modulos: ["auth", "caja", "menu", "pedidos", "reservas"],
      timestamp: new Date().toISOString()
    }));
    return;
  }

  if (req.url === "/api/pedidos/demo") {
    const pedido = registrarPedido(4, ["Bandeja Paisa", "Limonada"]);
    res.writeHead(200);
    res.end(JSON.stringify(pedido));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Ruta no encontrada" }));
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`SIGR corriendo en puerto ${PORT}`));
}

module.exports = { server };