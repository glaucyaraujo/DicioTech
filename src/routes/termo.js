import express from "express";
import TermoController from "../controllers/termoControllers.js";

const router = express.Router();

router
.get("/", TermoController.getAllTermo)
.post("/", TermoController.createTermo)
.put("/:id", TermoController.updateTermo)
.delete("/:id", TermoController.deleteTermo)
.get("/:id", TermoController.getByIdTermo)
.get("/categoria/:categoria", TermoController.getTermoByCategoria)
.get("/inicial/:inicial", TermoController.getTermoByInicial)
.delete("/", TermoController.deleteAllTermos)

export default router;
