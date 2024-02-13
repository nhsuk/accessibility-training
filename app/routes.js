// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/service/sitemap.xml', function(req, res) {
    res.sendFile('sitemap.xml', { root: './app/views/service' });
});

router.post('/service/step1', function(req, res) {

    let firstName = req.session.data['first-name']
    let lastName = req.session.data['last-name']

    if (firstName == ""){
      if (lastName == ""){
        res.render('service/step1', {error: 1, noFirstName: 1, noLastName: 1})
      } else {
        res.render('service/step1', {error: 1, noFirstName: 1})
      }
    } else {
      if (lastName == ""){
        res.render('service/step1', {error: 1, noLastName: 1})
      } else {
        res.redirect('/service/step2')
      }
    }

});


module.exports = router;
