const express = require('express')
const router = express.Router()
const biblio = require('../biblio.json')

router.get('/', function(req, res, next) {
    res.render('newbook', { title: 'Add a New Book' });
  });


router.post('/', function(req, res, next) {
    // console.log(req.body)
    // res.send('libro agregado')

    const { title, author,  description, img } = req.body

    if ( req.body != null ){
      
      biblio.push(req.body)
      console.log(biblio)
    }
    


    res.redirect('/books')
});



module.exports = router;