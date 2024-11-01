const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

router.get("/getAllContacts", contactController.getAllContacts);
router.post("/addContact", contactController.addContact);
router.get("/contactInfo/:id", contactController.contactInfo);
router.delete("/deleteContact/:id", contactController.deleteContact);

module.exports = router;
