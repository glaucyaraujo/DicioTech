import  mongoose  from "mongoose";

mongoose.connect(
  "mongodb+srv://hellenaraujoeng:soulinda@cluster0.kigjv9h.mongodb.net/Diciotech"
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech
