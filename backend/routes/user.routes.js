const router = require("express").Router();
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");

router.get("/getAllUsers", userController.getAllUsers);
router.get("/userInfo/:id", userController.userInfo);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

//upload
router.post("/upload", uploadController.uploadProfil);

module.exports = router;
