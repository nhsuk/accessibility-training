// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/service/sitemap.xml', function(req, res) {
    res.sendFile('sitemap.xml', { root: './app/views/service' });
});

module.exports = router;
