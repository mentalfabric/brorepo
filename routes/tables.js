'use strict'

const express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  moment = require('moment'),
  Table = mongoose.model('Table');

router.post('/create-table', (req, res, next) => {
  let newTable = new Table(req.body);

  newTable.save()
    .then( table => {
      res.json(table);
    })
    .catch(next);
});

router.get('/find-all-tables', (req, res, next) => {
  Table.find({})
    .then( tables => {
      res.json(tables);
    })
    .catch(next);
});

router.put('/change-availability', (req, res, next) => {
  Table.findOne({tableId: req.body.tableId})
    .then( table => {
      table.available = !table.available;
      if(!table.available){
        table.timer = Date.now();
      }
      table.save()
        .then( result => {
          res.json(result);
        })
        .catch(next);
    })
    .catch(next);
});

router.delete('/delete-table', (req, res, next) => {
  Table.findOne({tableId: req.body.tableId})
    .then( table => {
      table.remove({_id: table._id})
        .then( () => {
          res.sendStatus(200);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
