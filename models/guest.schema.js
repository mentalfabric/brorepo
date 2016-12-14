const mongoose = require('mongoose'),
      _ = require('lodash'),
      Promise = require('bluebird');

const GuestSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: Number, required: true},
  email: {type: String},
  numberOfPeople: {type: Number, required: true},
  preference: {type: String},
  special_instructions: {type: String},
  seated: {type: Boolean},
  reserved: {type: Boolean},
  // reservation: {
  //   date: {type: String, required: true},
  //   time: {type: String, required: true},
  //   checked_in: {type: Boolean},
  //   default: false
  // }
  timestamp: {type: Date, default: Date.now}
});

mongoose.model('Guest', GuestSchema);
