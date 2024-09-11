const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  idVilla: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.reservations ||
  mongoose.model("reservation", reservationSchema);
