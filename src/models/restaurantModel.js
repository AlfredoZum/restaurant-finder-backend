const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  types: [String],
  address: {
    type: {
      latitude: Number,
      longitude: Number,
      name: String,
    },
    required: true,
  },
  image: String,
  gallery: [String],
  time_delivery: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('restaurant', RestaurantSchema);
