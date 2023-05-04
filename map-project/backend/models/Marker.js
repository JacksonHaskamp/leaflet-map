const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  position: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  iconSize: {
    type: [Number],
    required: true,
    validate: [arrayLimit, 'Icon size array should have exactly 2 elements.'],
  },
});

function arrayLimit(val) {
  return val.length === 2;
}

module.exports = mongoose.model('Marker', markerSchema);
