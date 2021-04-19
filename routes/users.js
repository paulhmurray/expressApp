var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {

  const users = {
    "1": "fred",
    "2": "Jill"
  }

  res.send(`Hello ${users[req.params["userId"]]}`);
});

module.exports = router;

