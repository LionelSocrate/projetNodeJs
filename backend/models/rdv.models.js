const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rendezVousSchema = new Schema({
  idClient: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports =
  mongoose.models.rendezVous || mongoose.model("rendezVous", rendezVousSchema);
