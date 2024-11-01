const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("contacts", contactSchema);
