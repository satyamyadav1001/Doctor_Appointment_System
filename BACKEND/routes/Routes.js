const express = require("express");
const {
    loginController,
    registerController,
    authController,
    applyDoctorController,
    getAllNotificationController,
    deleteNotificationController,
    getAllDoctorsController,
    bookAppointmentController,
    bookingAvailabilityController,
    userAppointmentsController
    

} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//Login || post
router.post("/login", loginController);

//register || post
router.post("/register", registerController);

// auth // post
router.post("/getUserData",authMiddleware, authController )

// apply doctor // post
router.post("/apply-doctor",authMiddleware, applyDoctorController )

// Notification doctor // post
router.post("/get-all-notification",authMiddleware, getAllNotificationController )


// Notification doctor // post
router.post("/delete-all-notification",authMiddleware, deleteNotificationController);
// router.post("/getAllUsers",authMiddleware, getAllUsersController);

// get all doctor
router.get("/getallDoctors",authMiddleware, getAllDoctorsController )

// book appointment
router.post("/book-appointment",authMiddleware, bookAppointmentController )

//Booking Avliability
router.post("/booking-availbility",authMiddleware ,bookingAvailabilityController);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;