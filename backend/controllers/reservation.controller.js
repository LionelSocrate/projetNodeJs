const reservationModel = require("../models/reservation.models");

module.exports.addReservation = async (req, res) => {
  try {
    const reservation = await reservationModel.create({
      idVilla: req.body.idVilla,
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
    });
    return res.status(200).json({ reservation });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationModel.find();
    return res.status(200).json({ reservations });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};

module.exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await reservationModel.findByIdAndDelete(id);
    if (!reservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    res.status(200).json({ message: "reservation deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await reservationModel.findByIdAndUpdate(id, req.body);
    if (!reservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    const updateReservation = await reservationModel.findById(id);
    res.status(200).json(updateReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
