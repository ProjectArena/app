var express = requre('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('This is the home page.');
})

modules.exports = router;
