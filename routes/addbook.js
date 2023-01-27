const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('newbook', { title: 'Add a New Book' });
  });


module.exports = router;