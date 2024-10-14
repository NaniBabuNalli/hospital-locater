


const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  timestamp: Date,
  reviewText: String
});

const openingTimesSchema = new mongoose.Schema({
  days: String,
  opening: String,
  closing: String,
  closed: Boolean
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: { type: Number, min: 1, max: 5 },
  facilities: [String],
  coords: {
    lat: Number,
    lng: Number
  },
  openingTimes: [openingTimesSchema],
  reviews: [reviewSchema],
  mapUrl: String,
  imageSrc: String,
  gmail: String,
  phno: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
