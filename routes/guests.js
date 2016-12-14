'use strict';

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Guest = mongoose.model('Guest');
let twilio = require('twilio'),
 client = twilio(process.env.TWILIO_ACCOUNT.replace('\r', ''), process.env.TWILIO_AUTH.replace('\r', '')),
 twilio_number = process.env.TWILIO_NUMBER.replace('\r', '');


router.get('/', (req,res,next) => {
    Guest.find({})
        .then( guest => {
            res.json(guest);
        });
});

router.get('/table-ready', (req, res, next) => {
  client.sendMessage({
    to: '+15597098587',
    from: twilio_number,
    body: 'Your table is ready!'
  })
    .then( result => res.sendStatus(200))
    .catch(next);
});

router.post('/newGuest', (req,res,next) => {
  console.log(req.body);
    let newGuest = new Guest(req.body);
    newGuest.save()
        .then( guest => {
            res.json(guest);
        })
        .catch(next);
});

router.get('/landingpage', (req,res,next) => {
    res.render('landingpage');
});

router.get('/waitinglist', (req,res,next) => {
    res.render('waitinglist');
});

router.delete('/cancel/:number', (req, res, next) => {
  Guest.findOne({phone: parseInt(req.params.number)})
    .then( guest => {
      guest.remove({_id: guest._id});
      res.json(guest);
    });
});

module.exports = router;
