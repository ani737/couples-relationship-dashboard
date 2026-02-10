const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.get('/:id', coupleController.getCoupleDetails);
router.post('/', coupleController.createCouple);

module.exports = router;
