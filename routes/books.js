const express = require('express')
const router = express.Router()

const biblio = require('../biblio.json')

router.get('/', function(req, res, next) {
    //res.send(biblio)
    //console.log(biblio)

    res.render('books', {lista: biblio} )

    
})


module.exports = router

