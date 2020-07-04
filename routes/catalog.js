var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController')
var seller_controller = require('../controllers/sellerController')
var buyer_controller = require('../controllers/buyerController')
var timeslot_controller = require('../controllers/timeslotController')
var appointmentController = require('../controllers/appointmentController')


router.post('/user', user_controller.create_user);  

router.post('/seller', seller_controller.create_seller); 
router.get('/sellers', seller_controller.list_sellers); 

router.post('/buyer', buyer_controller.create_buyer);  


router.post('/slot', timeslot_controller.create_slot);
router.get('/slots', timeslot_controller.list_slots);
router.get('/available-slots', timeslot_controller.available_slots);

router.post('/appointment', appointmentController.create_appointment);
router.get('/appointments', appointmentController.list_requests);
router.get('/appointments-buyer', appointmentController.list_requests_buyer);
router.put('/appointment', appointmentController.confirm_request);
router.delete('/appointment', appointmentController.reject_request);

module.exports = router;
