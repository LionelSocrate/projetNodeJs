const router = require("express").Router();
const projetController = require("../controllers/projet.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");

const upload = multer({
  limits: { fileSize: 5000000 },
});

router.get("/getAllProjet", projetController.getAllProjet);
router.post("/addProjet", projetController.addProjet);
router.delete("/deleteProjet/:id", projetController.deleteProjet);

router.post(
  "/uploadMasse",
  upload.single("file"),
  uploadController.uploadMasse
);

module.exports = router;
