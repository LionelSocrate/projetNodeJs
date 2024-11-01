const projetModel = require("../models/projet.models");

//add project
module.exports.addProjet = async (req, res) => {
  try {
    const projet = await projetModel.create({
      nom: req.body.nom,
      adresse: req.body.adresse,
      picture: req.body.picture,
      description: req.body.description,
    });
    return res.status(200).json({ projet });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//delete project
module.exports.deleteProjet = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projetModel.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: "project not found" });
    }
    res.status(200).json({ message: "project deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//get all projects

module.exports.getAllProjet = async (req, res) => {
  try {
    const projets = await projetModel.find();
    return res.status(200).json({ projets });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//update project

module.exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const projet = await projetModel.findByIdAndUpdate(id, req.body);
    if (!projet) {
      return res.status(404).json({ message: "project not found" });
    }
    const updateProject = await projetModel.findById(id);
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
