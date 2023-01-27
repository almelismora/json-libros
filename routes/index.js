const express = require('express');
const router = express.Router();

const biblio = require('../biblio.json')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressBooks', biblio: biblio });

});



module.exports = router;
