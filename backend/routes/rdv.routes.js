const router = require("express").Router();
const rdvController = require("../controllers/rdv.controller");
const sendEmailController = require("../controllers/sendEmail.controller");

router.post("/addRdv", rdvController.addRdv);
router.delete("/deleteRdv/:id", rdvController.deleteRdv);
router.get("/getAllRdvs", rdvController.getAllRdvs);
router.get("/rdvInfo/:id", rdvController.rdvInfo);
router.post("/sendEmail", sendEmailController.sendEmail);

module.exports = router;
