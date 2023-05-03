const express = require('express');
const markerController = require('../controllers/markerController');
const router = express.Router();

router.get('/', markerController.getAllMarkers);
router.post('/', markerController.createMarker);

module.exports = router;
