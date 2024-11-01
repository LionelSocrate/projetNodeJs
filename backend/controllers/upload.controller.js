const villaModel = require("../models/villa.models");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const { uploadErrors } = require("../utils/errors.utils");
const { Readable } = require("stream");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadUser = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Vérification du type de fichier et de la taille
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    const fileName = `${req.body.nom}.jpg`;
    const imagePath = path.join(
      __dirname,
      "../../frontend/public/uploads/user",
      fileName
    );

    // Convertir le buffer en un flux lisible
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    // Sauvegarde du fichier
    await pipeline(bufferStream, fs.createWriteStream(imagePath));

    res.status(201).json({
      message: "File uploaded successfully",
      path: `/uploads/user/${fileName}`,
    });
  } catch (err) {
    console.error("Error during file upload:", err);
    const errors = uploadErrors(err);
    res.status(500).json({ errors });
  }
};
module.exports.uploadVilla = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Vérification du type de fichier et de la taille
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    const fileName = `${req.body.nom + req.body.lot}.jpg`;
    const imagePath = path.join(
      __dirname,
      "../../frontend/public/uploads/villa",
      fileName
    );

    // Convertir le buffer en un flux lisible
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    // Sauvegarde du fichier
    await pipeline(bufferStream, fs.createWriteStream(imagePath));

    res.status(201).json({
      message: "File uploaded successfully",
      path: `/uploads/villa/${fileName}`,
    });
  } catch (err) {
    console.error("Error during file upload:", err);
    const errors = uploadErrors(err);
    res.status(500).json({ errors });
  }
};
module.exports.uploadMasse = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Vérification du type de fichier et de la taille
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    const fileName = `pc_${req.body.nom}.jpg`;
    const imagePath = path.join(
      __dirname,
      "../../frontend/public/uploads/planMasse",
      fileName
    );

    // Convertir le buffer en un flux lisible
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    // Sauvegarde du fichier
    await pipeline(bufferStream, fs.createWriteStream(imagePath));

    res.status(201).json({
      message: "File uploaded successfully",
      path: `/uploads/planMasse/${fileName}`,
    });
  } catch (err) {
    console.error("Error during file upload:", err);
    const errors = uploadErrors(err);
    res.status(500).json({ errors });
  }
};
module.exports.uploadCellule = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Vérification du type de fichier et de la taille
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    const fileName = `pc_${req.body.name + req.body.lot}.jpg`;
    const imagePath = path.join(
      __dirname,
      "../../frontend/public/uploads/cellule",
      fileName
    );

    // Convertir le buffer en un flux lisible
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    // Sauvegarde du fichier
    await pipeline(bufferStream, fs.createWriteStream(imagePath));

    res.status(201).json({
      message: "File uploaded successfully",
      path: `/uploads/cellule/${fileName}`,
    });
  } catch (err) {
    console.error("Error during file upload:", err);
    const errors = uploadErrors(err);
    res.status(500).json({ errors });
  }
};
