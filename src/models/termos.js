import mongoose from "mongoose";

const termoScheema = new mongoose.Schema({
  inicial: { type: String, required: true },
  termo: { type: String, required: true },
  traducao: { type: String },
  significado: { type: String, required: true },
  categoria: { type: String, required: true },
  exemplos: { type: String, required: true }
});

const termos = mongoose.model("termos", termoScheema);

export default termos;
