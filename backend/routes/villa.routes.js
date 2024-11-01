const router = require("express").Router();
const villaController = require("../controllers/villa.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");

const upload = multer({
  limits: { fileSize: 5000000 },
});

router.get("/getAllVilla", villaController.getAllVilla);
router.get("/villaInfo/:id", villaController.villaInfo);
router.post("/addVilla", villaController.addVilla);
router.delete("/deleteVilla/:id", villaController.deleteVilla);
router.put("/updateVilla/:id", villaController.updateVilla);

//upload
router.post(
  "/uploadVilla",
  upload.single("file"),
  uploadController.uploadVilla
);
router.post(
  "/uploadCellule",
  upload.single("file"),
  uploadController.uploadCellule
);

module.exports = router;
