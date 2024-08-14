const express = require("express");
const {getDoctorInfoController,
    updateProfileController,
    getDoctorByIdController,
    doctorAppointmentsController
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

// post get single controller
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get("/doctor-appointments", authMiddleware,doctorAppointmentsController);
  


module.exports = router;