const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.static("public")); // Sirve archivos estáticos

// Ruta para buscar superhéroes
app.get("/api/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${name}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

// Exporta el servidor para Vercel
module.exports = app; // ¡Esto es clave!
