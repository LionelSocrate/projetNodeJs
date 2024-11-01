const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.get("/logout", authController.logout);
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

module.exports = router;
