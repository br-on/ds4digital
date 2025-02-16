// backend/modules/ddaf/routes/ddafChamadosRoutes.js
const express = require("express");
const ddfChamadosController = require("../controllers/ddafChamadosController");

const router = express.Router();

// Rota para pegar todos os chamados
router.get("/", ddfChamadosController.getChamados);

// Rota para criar um novo chamado
router.post("/", ddfChamadosController.createChamado);

module.exports = router;
