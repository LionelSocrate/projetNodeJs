const router = require("express").Router();
const visiteurController = require("../controllers/visiteur.controller");

router.post("/add", visiteurController.addVisiteur);
router.get("/get-all", visiteurController.getAllVisiteurs);
router.get("/:id", visiteurController.visiteurInfo);
router.delete("/delete/:id", visiteurController.deleteVisiteur);
router.put("/update/:id", visiteurController.updateVisiteur);

module.exports = router;
