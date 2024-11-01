const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projetSchema = new Schema({
  nom: {
    type: String,
    unique: true,
    trim: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: "/uploads/planMasse/manankasina.jpg",
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("projets", projetSchema);
