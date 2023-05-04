const express = require('express');
const markerController = require('../controllers/markerController');
const router = express.Router();

router.get('/', markerController.getAllMarkers);
router.post('/', markerController.createMarker);
router.put('/:id', markerController.updateMarker);
router.delete('/:id', markerController.deleteMarker);

module.exports = router;
