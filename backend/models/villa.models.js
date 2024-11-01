const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villaSchema = new Schema({
  nom: {
    type: String,
    lowercase: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  idProjet: {
    type: String,
    lowercase: true,
  },
  picture: {
    type: String,
    default: "/uploads/villa/mendrika.jpg",
  },
  planCellule: {
    type: String,
    default: "/uploads/cellule/mendrika.jpg",
  },
  lot: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  isReserv: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("villas", villaSchema);
