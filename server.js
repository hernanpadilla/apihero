// server.js (Backend en Node.js con Express)
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const ACCESS_TOKEN = process.env.SUPERHERO_API_KEY;

app.use(cors());
app.use(express.static("public"));

// Ruta para buscar superhéroes por nombre
app.get("/api/search/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener datos" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});