const mongoose = require('mongoose'),
      _= require('lodash'),
      Promise = require('bluebird');

const TableSchema = new mongoose.Schema({
    tableId: {type: Number, required: true, unique: true},
    numberOfSeats: {type: Number, min: 1},
    section: {type: String, required: true},
    timer: {type: Date, default: Date.now()},
    available: {type: Boolean, default: true}
});

mongoose.model('Table', TableSchema);
