const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villaSchema = new Schema({
  idProject: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  nomVilla: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  numLot: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.models.users || mongoose.model("villa", villaSchema);
