const rdvModel = require("../models/rdv.models");

module.exports.addRdv = async (req, res) => {
  try {
    const rdv = await rdvModel.create({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
      lieu: req.body.lieu,
      date: req.body.date,
      heure: req.body.heure,
    });
    return res.status(200).json({ rdv });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.deleteRdv = async (req, res) => {
  try {
    const { id } = req.params;
    const rdv = await rdvModel.findByIdAndDelete(id);
    if (!rdv) {
      return res.status(404).json({ message: "rendez-vous not found" });
    }
    res.status(200).json({ message: "rendez-vous deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllRdvs = async (req, res) => {
  try {
    const rdvs = await rdvModel.find();
    return res.status(200).json({ rdvs });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports.rdvInfo = async (req, res) => {
  try {
    const rdv = await rdvModel.findById(req.params.id);
    if (!rdv) {
      return res.status(404).json({ message: "rendez-vous not found" });
    }
    return res.status(200).json({ rdv });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
