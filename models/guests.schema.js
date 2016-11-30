'use strict';

const mongoose = require('mongoose'),
      Promise = require('bluebird');

let GuestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true}
});

mongoose.model('Guest', GuestSchema);