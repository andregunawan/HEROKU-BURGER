
var burgersModel = require('../models/burger.js');
const express = require('express');
const router = express.Router();


//EXPRESS GET ROUTE
router.get('/', function(req, res) {
  burgersModel.selectAll('burgers', function(data) {
    res.render('index', { burgers: data });
  });
});

//EXPRESS POST ROUTE
router.post('/burger/insert', function (req, res) {
    burgersModel.insertOne('burgers', 'burger_name', 'devoured', 'date', req.body.newBurgerOrder, function (data) {
        res.redirect('/');
    });
});

//EXPRESS PUT ROUTE
router.put('/burger/:id', function (req, res) {
    burgersModel.updateOne('burgers', 'devoured', req.params.id, function (data) {
        res.redirect('/');
    });
});

//Experts routes for server.js to use. 
module.exports = router;
