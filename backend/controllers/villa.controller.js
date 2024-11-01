const villaModel = require("../models/villa.models");

//get all villa

module.exports.getAllVilla = async (req, res) => {
  try {
    const villa = await villaModel.find();
    return res.status(200).json({ villa });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports.villaInfo = async (req, res) => {
  try {
    const villa = await villaModel.findById(req.params.id);
    if (!villa) {
      return res.status(404).json({ message: "villa not found" });
    }
    return res.status(200).json({ villa });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//add villa

module.exports.addVilla = async (req, res) => {
  try {
    const villa = await villaModel.create({
      nom: req.body.nom,
      lot: req.body.lot,
      type: req.body.type,
      idProjet: req.body.idProjet,
      picture: req.body.picture,
      planCellule: req.body.planCellule,
      description: req.body.description,
    });
    return res.status(200).json({ villa });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.deleteVilla = async (req, res) => {
  try {
    const { id } = req.params;
    const villa = await villaModel.findByIdAndDelete(id);
    if (!villa) {
      return res.status(404).json({ message: "villa not found" });
    }
    res.status(200).json({ message: "villa deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateVilla = async (req, res) => {
  try {
    const { id } = req.params;

    const villa = await villaModel.findByIdAndUpdate(id, req.body);
    if (!villa) {
      return res.status(404).json({ message: "villa not found" });
    }
    const updateVilla = await villaModel.findById(id);
    res.status(200).json(updateVilla);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};
