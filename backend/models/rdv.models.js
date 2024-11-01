const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rendezVousSchema = new Schema({
  nom: {
    type: String,
    minLength: 3,
    required: true,
  },
  prenom: {
    type: String,
    minLength: 3,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    minLength: 3,
  },
  lieu: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  heure: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("rendezVous", rendezVousSchema);
