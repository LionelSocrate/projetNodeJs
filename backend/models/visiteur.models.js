const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visiteurSchema = new Schema({
  numVisiteur: {
    type: String,
    unique: true,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  nbJours: {
    type: Number,
    required: true,
  },
  tarifJournalier: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("visiteurs", visiteurSchema);
