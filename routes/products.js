var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  try {
    const response = {
      code: 200,
      data: [],
    }

    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal server error. Try later.');

  }

});

module.exports = router;
