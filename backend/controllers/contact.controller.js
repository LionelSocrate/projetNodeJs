const contactModel = require("../models/contact.models");

module.exports.addContact = async (req, res) => {
  try {
    const contact = await contactModel.create({
      nom: req.body.nom,
      telephone: req.body.telephone,
      email: req.body.email,
      message: req.body.message,
    });
    return res.status(200).json({ contact });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.contactInfo = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "contact not found" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    return res.status(200).json({ contacts });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactModel.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: "contact not found" });
    }
    res.status(200).json({ message: "contact deleted succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
