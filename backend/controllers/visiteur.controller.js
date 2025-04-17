const visiteurModel = require("../models/visiteur.models");

module.exports.addVisiteur = async (req, res) => {
  try {
    const visiteur = await visiteurModel.create({
      numVisiteur: req.body.numVisiteur,
      nom: req.body.nom,
      nbJours: req.body.nbJours,
      tarifJournalier: req.body.tarifJournalier,
    });
    return res.status(200).json({ visiteur });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.visiteurInfo = async (req, res) => {
  try {
    const visiteur = await visiteurModel.findById(req.params.id);
    if (!visiteur) {
      return res.status(404).json({ message: "reservation not fond" });
    }return res.status(200).json({ visiteur });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getAllVisiteurs = async (req, res) => {
  try {
    const visiteurs = await visiteurModel.find();
    return res.status(200).json({ visiteurs });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};

module.exports.deleteVisiteur = async (req, res) => {
  try {
    const { id } = req.params;
    const visiteur = await visiteurModel.findByIdAndDelete(id);
    if (!visiteur) {
      return res.status(404).json({ message: "visiteur not found" });
    }
    res.status(200).json({ message: "visiteur deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateVisiteur = async (req, res) => {
  try {
    const { id } = req.params;

    const visiteur = await visiteurModel.findByIdAndUpdate(id, req.body);
    if (!visiteur) {
      return res.status(404).json({ message: "visiteur not foundll"});
    }
    const updateVisiteur = await visiteurModel.findById(id);
    res.status(200).json(updateVisiteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
