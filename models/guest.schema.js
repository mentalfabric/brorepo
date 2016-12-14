const mongoose = require('mongoose'),
      _ = require('lodash'),
      Promise = require('bluebird');

const GuestSchema = new mongoose.Schema({
  timestamp: {type: Date, default: Date.now},
  name: {type: String, required: true},
  phone: {type: Number, required: true},
  email: {type: String, required: true},
  numberOfPeople: {type: Number, required: true},
  preference: {type: String},
  special_instructions: {type: String},
  seated: {type: Boolean},
  reserved: {type: Boolean},
  reservation: {
    date: {type: String, required: true},
    time: {type: String, required: true},
    checked_in: {type: Boolean},
    default: false
  }
  
});

mongoose.model('Guest', GuestSchema);
