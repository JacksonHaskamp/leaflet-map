const Marker = require('../models/Marker');

exports.getAllMarkers = async (req, res) => {
  try {
    const markers = await Marker.find();
    res.json(markers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMarker = async (req, res) => {
  const marker = new Marker({
    name: req.body.name,
    description: req.body.description,
    position: req.body.position,
    iconSize: req.body.iconSize,
  });

  try {
    const newMarker = await marker.save();
    res.status(201).json(newMarker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateMarker = async (req, res) => {
  console.log('Updating marker:', req.params.id, req.body);

  try {
    const updatedMarker = await Marker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('Updated marker:', updatedMarker);

    res.status(200).json(updatedMarker);
  } catch (error) {
    console.error('Error updating marker:', error);
    res.status(500).json({ message: 'Error updating marker' });
  }
};


