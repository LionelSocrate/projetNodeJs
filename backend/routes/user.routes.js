const router = require("express").Router();
const userController = require("../controllers/user.controller");
const multer = require("multer");

const upload = multer({
  limits: { fileSize: 5000000 },
});

router.get("/getAllUsers", userController.getAllUsers);
router.get("/userInfo/:id", userController.userInfo);
router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
