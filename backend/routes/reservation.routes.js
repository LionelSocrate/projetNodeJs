const router = require("express").Router();
const reservationController = require("../controllers/reservation.controller");

router.post("/addReservation", reservationController.addReservation);
router.get("/getAllReservations", reservationController.getAllReservations);
router.delete("/deleteReservation", reservationController.getAllReservations);
router.put("/updateReservation", reservationController.updateReservation);

module.exports = router;
