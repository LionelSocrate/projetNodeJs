const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  idVilla: {
    type: String,
    required: true,
  },
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
    unique: true,
  },
  adresse: {
    type: String,
    minLength: 3,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("reservations", reservationSchema);
