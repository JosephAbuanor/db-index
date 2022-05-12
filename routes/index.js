var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const {GetData} = require("../controllers/Queries")

router.get("/query", GetData)

module.exports = router;
