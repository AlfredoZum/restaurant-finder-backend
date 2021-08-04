const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  restaurant_id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  categories: [String],
  price: {
    type: Number,
    required: true,
  },
  image: String,
  gallery: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('food', FoodSchema);
