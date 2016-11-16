/**
 * Created by Nick Metcalf on 2016-11-15.
 */

var express = require('express');
var router = express.Router();

router.get('/shops', function(req, res, next) {
            res.render('shops', { title: 'Local Shops'})
});

//make public
module.exports = router;

