const { Football, BasquetBall, BaseBall } = require("../assets/categorias");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const obtenerArticulosFootball = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Football), 500); 
    });
};

const obtenerArticulosBasquetball = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(BasquetBall), 500); 
    });
};

const obtenerArticulosBaseball = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(BaseBall), 500); 
  });
};

// ==============================================
// RUTAS (ENDPOINTS)
// ==============================================

app.get("/Football", async (req, res) => {
  try {
    const data = await obtenerArticulosFootball();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener artículos" });
  }
});

app.get("/Basquetball", async (req, res) => {
  try {
    const data = await obtenerArticulosBasquetball();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener artículos" });
  }
});

app.get("/Baseball", async (req, res) => {
  try {
    const data = await obtenerArticulosBaseball();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener artículos" });
  }
});

// ==============================================
// INICIAR EL SERVIDOR
// ==============================================

app.listen(PORT, () => {
    console.log(`Servidor de Productos Deportivos corriendo en http://localhost:${PORT}`);
});